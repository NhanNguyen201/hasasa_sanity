// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas




// import localeString from './locale/String'
// import localeText from './locale/Text'
// import localeBlockContent from './locale/BlockContent'
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import product from './documents/product';
import instaOrder from './documents/instaOrder';
import user from './documents/user';
import cart from './documents/cart';
import purchaseCart from './documents/purchaseCart';
// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

import cartItem from './objects/cartItem';
// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import banner from './objects/banner';
import carousel from './objects/carousel';
import buyButtonSection from './objects/buyButtonSection';
import layoutGridItemContainer from './objects/grid/layoutGridItemContainer';

import productGrid from './objects/grid/productGrid'
import layoutGrid from './objects/grid/layoutGrid';
import layoutGridItem from './objects/grid/layoutGridItem';
// Then we give our schema to the builder and provide the result to Sanity
import card from './objects/card';
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    user,
    product,
    instaOrder,
    cart,
    purchaseCart,

    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    banner,
    carousel,
    cartItem,
    buyButtonSection,
    card,
    
    productGrid,
    layoutGrid,
    layoutGridItem,
    layoutGridItemContainer,
  ]),
})
