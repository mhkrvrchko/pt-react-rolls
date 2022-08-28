const ProductsData = [
    {
        id: 5772,
        title: "Shrimp Sushi",
        params: {
            rate: 4.7
        }
    },
    {
        id: 5773,
        title: "Tuna Sushi",
        params: {
            rate: 3.8
        }
    },
    {
        id: 5785,
        title: "Crab Sushi",
        params: {
            rate: 3.5
        }
    },
    {
        id: 5788,
        title: "Bonito Sushi",
        params: {
            rate: 4.2
        }
    }
];

export const getDummyProducts = () => ProductsData;

export const getProductsByRate = () => ProductsData.sort((a, b) => a.params.rate - b.params.rate);