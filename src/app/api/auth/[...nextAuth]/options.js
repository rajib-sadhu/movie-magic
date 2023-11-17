import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Your username"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"Your password"
                }
            },
            async authorize(credentials) {
                const user = { id: 9, name: "Rajib", password: "nextAuth" }
                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }
                else{
                    return null
                }
            }
        })
    ]
}