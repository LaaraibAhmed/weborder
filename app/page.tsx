import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import Banner_comp from '@/components/ui/Banner/Banner';
import Cards from '@/components/ui/Cards/Cards';
import PriceCards from '@/components/ui/PriceCards/PriceCards';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <div className="flex flex-col">
      <Banner_comp />
      <Cards />
      <Cards />
      <Cards />
      <Pricing
        user={user}
        products={products ?? []}
        subscription={subscription}
      />
    </div>
  );
}
