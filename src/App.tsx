import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useSelector } from 'react-redux';

import { Navbar } from './components/Navbar/index'
import { ProductFilter } from './components/ProductFilter/index'
import { ProductsList } from './components/ProductsList/index'
import { Footer } from './components/Footer/index'
import { ProductPage } from './components/ProductPage/index'
import { WalletPage } from './components/WalletPage/index'
import { SizesModal } from './components/SizesModal/index'
import { CheckoutModal } from './components/CheckoutModal/index'
import { ProjectsCarousel } from './components/ProjectsCarousel/index'
import { MainLanding } from './components/MainLanding/index'
import { MainPageBanner } from './components/MainPageBanner/index'

import './styles.sass'

import { SizesModalState } from './store/reducers/sizesModal'
import { CheckoutModalState } from './store/reducers/checkoutModal'

interface SizesModalInterface {
  sizesModal: SizesModalState;
}

interface CheckoutModalInterface {
  checkoutModal: CheckoutModalState
}

function App() {

  const showSizesModal = useSelector((state: SizesModalInterface) => state.sizesModal.size_modal_is_opened)
  const showCheckoutModal = useSelector((state: CheckoutModalInterface) => state.checkoutModal.checkout_modal_is_opened)

  return (
    <Router>

      {
        showSizesModal
        ?
        <SizesModal />
        :
        <></>
      }

      {
        showCheckoutModal
        ?
        <CheckoutModal />
        :
        <></>
      }

      <div className='main-wrapper'>
        <div className='inside-wrapper'>

          <Navbar />

          <Switch>

            <Route 
              path="/NFT'S/" exact
            >
              <ProductFilter />
              <ProductsList />
              <Footer/>
            </Route>

            <Route
              path='/collections'
            >
              <Footer />
            </Route>

            <Route 
              path="/product/:id" exact
            >           
              <ProductPage/>
              <Footer />
            </Route>

            <Route 
              path="/connect-wallet" exact
            >           
              <WalletPage/>
            </Route>

            <Route 
              path='/'
            >
              <MainLanding />
              <ProjectsCarousel type='Upcoming'/>
              <MainPageBanner/>
              <ProjectsCarousel type='Ended'/>
              <Footer/>
            </Route>

          </Switch>

          
        </div>
      </div>
      
    </Router>
  );
}

export default App;
