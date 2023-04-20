import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Item, { ItemProps } from "../components/pricing";
import { loadStripe } from "@stripe/stripe-js";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
const stripePromise = loadStripe("your_stripe_public_key_here");
import Header from '@/components/Header';

const Dashboard: NextPage = () => {
  const auth = getAuth();
  const router = useRouter();
  const [user, authLoading] = useAuthState(auth);
  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };
  if (authLoading) {
    return <div className='loader-container'><div className='loader'>CodeLingo</div></div>;
  }
  

  const plans: ItemProps[] = [
    {
      name: "Free Plan",
      price: "0",
      features: ["Basic Translation", "Limited Language Support"],
    },
    {
      name: "Pro Plan",
      price: "9.99",
      features: [
        "Unlimited Translations",
        "Extensive Language Support",
        "Priority Support",
      ],
    },
  ];

  const continueWithFreePlan = () => {
    router.push("/");
  };



  return (
    
    <div>
       <Header />
        
      <div className="text-center flex flex-row gap-6 items-center text-white px-4 ">
        {plans.map((plan, index) => (
          <Item key={index} {...plan} />
        ))}
      </div>



      <div className="flex flex-row mx:container	">
        

  <div className="mt-8 w-full flex justify-center ">
    <button
       onClick={continueWithFreePlan}
      className="text-center bg-black hover:bg-white hover:text-black text-white border border-white rounded-md p-2 w-48"
    >
      Continue with Free Plan
    </button>
        
  </div>
  









     
        <div className="mt-8 w-full flex justify-center ">
          <button
            // onClick={redirectToCheckout}
            className="text-center bg-white hover:bg-black hover:text-white text-black rounded-md p-2 w-48"
          >
            Go Pro Plan
          </button>
        </div>
    
      </div>
    </div>
    
  );
};

export default Dashboard;
