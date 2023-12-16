import React, { type FC, type ReactNode } from "react";

type ImageObj = {
    src: string;
    alt: string;
};

interface HeaderProps {
    image: ImageObj;
    children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
    return (
        <header>
            <img {...image} />
            {children}
        </header>
    );
};

export default Header;
