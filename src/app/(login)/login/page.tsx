import LoginComponent from "@/app/components/login/loginComponent";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Log in - TaskMaster',
    description: 'A modern platform for cross-functional work',
};

export default function Login () {
    return (
        <LoginComponent />
    )
} 