import {TopBar, ActionList, Icon, Frame, Text, Page} from '@shopify/polaris';
import {ArrowLeftMinor, NotificationFilledMajor} from '@shopify/polaris-icons';
import logo_ from "./imgs/shopify-logo.svg"
import Pagecomponent from './Pagecomponent';
import Contentcomponent from './Contentcomponent';

const Topbarcomponent = () => {
    const logo = {
        width: 40,
        topBarSource:logo_,
        url: '#',
        accessibilityLabel: 'Jaded Pixel',
      };
    const userMenuMarkup = (
        <TopBar.UserMenu
          name="Royal apps"
          initials="R"
        />
    );
    const searchFieldMarkup = (
        <TopBar.SearchField
          onChange={()=>console.log("hi")}
          value=""
          placeholder="Search"
          showFocusBorder
        />
    );
    
      const secondaryMenuMarkup = (
        <TopBar.Menu
          activatorContent={
            <span>
              <Icon source={NotificationFilledMajor} />
            </span>
          }
        />
      );
    
      const topBarMarkup = (
        <TopBar
          showNavigationToggle
          userMenu={userMenuMarkup}
          secondaryMenu={secondaryMenuMarkup}
          searchField={searchFieldMarkup}
          logoSuffix={<h1 style={{fontStyle:"italic",fontSize:"1.5rem",fontWeight:"bolder"}}>Shopify</h1>}
        >
        </TopBar>
      );
    return (
        <div>
            <Frame topBar={topBarMarkup} logo={logo} navigation={<Pagecomponent/>}>
                <Contentcomponent/>
            </Frame>
        </div>
    )
}

export default Topbarcomponent
