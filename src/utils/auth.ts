import {
	getServerSession,
	type NextAuthOptions,
	type DefaultSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";


import { env } from "../env.mjs";
import { redis } from "./db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

export const authOptions: NextAuthOptions = {
	adapter: UpstashRedisAdapter(redis),
	pages: {
		signIn: "/login",
		error: "/login",
		verifyRequest: "/login",
	},
    secret: env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		
		/**
		 * ...add more providers here.
		 *
		 * Most other providers require a bit more work than the Discord provider. For example, the
		 * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
		 * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
		 *
		 * @see https://next-auth.js.org/providers/github
		 */
	],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => {
	return getServerSession(authOptions);
};