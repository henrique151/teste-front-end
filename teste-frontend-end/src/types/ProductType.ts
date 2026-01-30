export type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
};

export type Props = {
    product: Product;
    onClose: () => void;
};

export type Tab = {
    label: string;
};
