export type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
};

export interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export type ProductsProps = {
    title?: string;
    subtitle?: string;
    showTabs?: boolean;
};
export type Props = {
    product: Product;
    onClose: () => void;
};

export type Tab = {
    label: string;
};

export type ProductTapsProps = {
    active: string;
    onChange: (category: string) => void;
}


export type ProductCardProps = {
    product: Product;
    onClick: (product: Product) => void;
};