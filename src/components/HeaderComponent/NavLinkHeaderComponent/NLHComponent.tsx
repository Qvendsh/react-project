'use client'
import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import '@/components/HeaderComponent/NavLinkHeaderComponent/NLHC.css'
type IProps = {
    path:string,
    children:React.ReactNode
}
const NlhComponent:FC<IProps> = ({path,children}) => {
    const pathname = usePathname()
    return (
        <div>
            <Link href={path} className={pathname === path ? 'active':'nonactive'}>{children}</Link>
        </div>
    );
};

export default NlhComponent;