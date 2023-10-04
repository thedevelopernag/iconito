import {Frame,Page, Navigation,Button} from '@shopify/polaris';
import {HomeMinor,OrdersMinor,ProductsMinor,OnlineStoreMinor,CustomersMinor,ContentMinor,FinancesMinor,AnalyticsMinor,MarketingMinor,DiscountsMinor} from '@shopify/polaris-icons';

const Pagecomponent = () => {
    const sidebar=()=>{
        return(
        <Navigation location="/">
        <Navigation.Section
          items={[
            {
            url: '#',
            excludePaths: ['#'],
            label:(
                <Button disclosure>#1 Trust Badges & icon...</Button>
            ),
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Home',
              icon: HomeMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Orders',
              icon: OrdersMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Products',
              icon: ProductsMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Customers',
              icon: CustomersMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Content',
              icon: ContentMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Finances',
              icon: FinancesMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Analaytics',
              icon: AnalyticsMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Marketing',
              icon:MarketingMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Discounts',
              icon: DiscountsMinor,
            },
          ]}
        />
        <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Online Store',
              icon: OnlineStoreMinor,
            },
          ]}
        />

<Navigation.Section
          title="Apps"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Trust badges & icons - icon..',
              icon: OnlineStoreMinor,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Quantity Breaks - Bundel..',
              icon: OnlineStoreMinor,
            }
          ]}
        />
        </Navigation>
        )
        
    
    }
  return (
    sidebar()
  )
}

export default Pagecomponent
