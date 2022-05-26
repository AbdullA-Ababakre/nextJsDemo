import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignIn({ csrfToken, providers }) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const signInUser = async (e) => {
        console.log("email", email);
        console.log("password", password);
        e.preventDefault();
        let options = { redirect: false, email, password }
        const res = await signIn('credentials', options);
        console.log("ress----", res);
        // setMessage(null);
        // if (res?.error) {
        //     setMessage(res.error);
        // }

        // return router.push('/');
    }


    const signUpUser = async (e) => {
        e.preventDefault();
        const res = await fetch('./api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
        let data = await res.json();

        if (data.message) {
            setMessage(data.message)
        }
        if (data.message == "Registered successfully") {
            let options = { redirect: false, email, password }
            const res = await signIn("credentials", options)
            // return router.push("/");
        }
    }

    return (
        <>
            {/* <form method="post" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Email address
                    <input type="email" id="email" name="email" />
                </label>
                <button type="submit">Sign in with Email</button>
            </form> */}

            <form action="">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Email address
                    <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="email" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <p style={{ color: 'red' }}>{message}</p>
                <button onClick={(e) => signInUser(e)}>Sign in with Credentials</button>
                <button onClick={(e) => signUpUser(e)}>Sign Up</button>
            </form>



            {
                Object.values(providers).map((provider) => {
                    if (provider.name === 'Email' || provider.name === 'Credentials') {
                        return;
                    }
                    return (
                        <div key={provider.name}>
                            <button onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req })
    if (session) {
        // Signed in
        return {
            redirect: { destination: "/" }
        }
    }
    const csrfToken = await getCsrfToken(context);
    const providers = await getProviders();

    return {
        props: { csrfToken, providers }
    }
}