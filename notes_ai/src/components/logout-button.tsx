"use client";

import React, { useState } from "react";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const LogoutButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const router: AppRouterInstance = useRouter();
    async function handleLogout(){
        setLoading(true)
        
        await new Promise((res) => setTimeout(res, 1000))
        const errorMessage = null;

        if(!errorMessage){
            toast.success('You have been successfully logged out!');
            router.push("/")
        } else {
            toast.error("failed to log out.");
        }
        setLoading(false)
    }

    return(
        <Button className="w-24" variant={'outline'}
        onClick={handleLogout}
        disabled={loading}>
            
            {loading ? <Loader2 className="animate-spin"/> : 'Log out'}
        </Button>
    );
}

export default LogoutButton;