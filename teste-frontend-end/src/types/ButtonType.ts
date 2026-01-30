export type ButtonProps = {
    $variant?: "primary" | "secondary";
    $size?: "sm" | "md" | "lg";
};

export type Props = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
};
