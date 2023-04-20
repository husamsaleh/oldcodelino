export interface ItemProps {
    name: string;
    price: string;
    features: string[];
  }
  
  const Item: React.FC<ItemProps> = (props) => {
    return (
      <div className="w-full border-2 border-gray-300 rounded-md mt-16 p-4 bg-black  h-72 ">
        <div className="text-white font-bold  mb-4 ">{props.name}</div>
        <div className="flex justify-center">
          <div>
            <div className="text-green-600 mb-4">${props.price}</div>
            <ul className="list-disc list-inside">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Item;
  