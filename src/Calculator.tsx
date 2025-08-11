import { useState, type ChangeEvent } from "react";
export const Calculator = () => {
    const factor = 0.51;
    const delivery = 28;
    const calculatePrice = (initialPrice : number) : number => {
        return initialPrice !== 0 ?  Math.ceil(initialPrice * factor + delivery) : 0;
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const initialPrice = event.target.valueAsNumber || 0;
        setPrice(calculatePrice(initialPrice))
    };
    const [price, setPrice] = useState(0);
    return (
        <>
            <form onSubmit={(e : React.FormEvent<HTMLFormElement>) => {e.preventDefault()}}>
                <label htmlFor="price">Цена в юанях на маркетплейсе</label>
                <br />
                <input type="number" id="initialPrice" name="initalPrice" required onChange={handleChange}/>
                <span>¥</span>
                <h2><strong>{price ?? 0}</strong> BYN</h2>   
            </form>
        </>
    );
};