import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jwxmZBKwVFeeo6Zc7qpn62zWvPe08pUQFQ&usqp=CAU"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  // const {resName, cuisine}=props;
  const { resData } = props;
  return (
    <div className="rescard" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating}⭐</h4>
    </div>
  );
};
const reslist = [
        {
        info: {
        id: "438435",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Parsvnath Mall",
        areaName: "Mayur Vihar",
        costForTwo: "₹350 for two",
        cuisines: [
        "Burgers",
        "American"
        ],
        avgRating: 4.2,
        feeDetails: {
        restaurantId: "438435",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 3500
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 3500
        },
        parentId: "166",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
        deliveryTime: 26,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 05:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-parsvnath-mall-mayur-vihar-delhi-438435",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "787077",
        name: "Burgrill - The Win Win Burger",
        cloudinaryImageId: "a39bcdf9cf8481e007a7c5026adb30c0",
        locality: "Unit No. G-12",
        areaName: "Mayur Vihar",
        costForTwo: "₹350 for two",
        cuisines: [
        "Burgers",
        "Rolls & Wraps",
        "Snacks"
        ],
        avgRating: 4.4,
        feeDetails: {
        restaurantId: "787077",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 3500
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 3500
        },
        parentId: "302366",
        avgRatingString: "4.4",
        totalRatingsString: "20+",
        sla: {
        deliveryTime: 24,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 04:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-unit-no-g-12-mayur-vihar-delhi-787077",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "42688",
        name: "Dhading KTM",
        cloudinaryImageId: "bocsidmnhnwtwqm3fnzm",
        locality: "Lalita Park",
        areaName: "Laxmi Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
        "Chinese"
        ],
        avgRating: 4.1,
        feeDetails: {
        restaurantId: "42688",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 4300
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 4300
        },
        parentId: "71981",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 04:45:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        aggregatedDiscountInfoV2: { },
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/dhading-ktm-lalita-park-laxmi-nagar-delhi-42688",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "516395",
        name: "Hilton restaurant",
        cloudinaryImageId: "a6ylbndocvy5i64vjz31",
        locality: "Mandawali",
        areaName: "Pandav Nagar",
        costForTwo: "₹450 for two",
        cuisines: [
        "Biryani",
        "Fast Food",
        "Snacks",
        "Ice Cream"
        ],
        avgRating: 3.1,
        feeDetails: {
        restaurantId: "516395",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 3500
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 3500
        },
        parentId: "19233",
        avgRatingString: "3.1",
        totalRatingsString: "20+",
        sla: {
        deliveryTime: 31,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 23:59:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        aggregatedDiscountInfoV2: { },
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/hilton-restaurant-mandawali-pandav-nagar-delhi-516395",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "410374",
        name: "Murthal No.1 Parantha",
        cloudinaryImageId: "wvi0l0bds4gvjeltlrfz",
        locality: "Ganesh Nagar",
        areaName: "Mayur Vihar",
        costForTwo: "₹300 for two",
        cuisines: [
        "North Indian",
        "Street Food",
        "Punjabi",
        "Snacks",
        "Beverages"
        ],
        avgRating: 3.9,
        feeDetails: {
        restaurantId: "410374",
        fees: [
        {
        name: "BASE_DISTANCE",
        fee: 3500
        },
        {
        name: "BASE_TIME"
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 3500
        },
        parentId: "142082",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
        deliveryTime: 24,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 04:00:00",
        opened: true
        },
        badges: {
        textExtendedBadges: [
        {
        iconId: "guiltfree/GF_Logo_android_3x",
        shortDescription: "options available",
        fontColor: "#7E808C"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: {
        badgeObject: [
        {
        attributes: {
        description: "",
        fontColor: "#7E808C",
        iconId: "guiltfree/GF_Logo_android_3x",
        shortDescription: "options available"
        }
        }
        ]
        }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/murthal-no-1-parantha-ganesh-nagar-mayur-vihar-delhi-410374",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "33343",
        name: "Wow! Noodle",
        cloudinaryImageId: "xexoftiu0yymcicpnxai",
        locality: "L Block",
        areaName: "Sector 11",
        costForTwo: "₹300 for two",
        cuisines: [
        "Chinese",
        "Thai"
        ],
        avgRating: 3.6,
        feeDetails: {
        restaurantId: "33343",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 6400
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 6400
        },
        parentId: "13358",
        avgRatingString: "3.6",
        totalRatingsString: "10K+",
        sla: {
        deliveryTime: 34,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 04:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/wow-noodle-l-block-sector-11-delhi-33343",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "14594",
        name: "Legacy of Awadh",
        cloudinaryImageId: "ammgqqcz0yntx8ts9o2f",
        locality: "sector 8",
        areaName: "Dallupura, Sector 8",
        costForTwo: "₹450 for two",
        cuisines: [
        "Mughlai",
        "Biryani",
        "North Indian",
        "Chinese"
        ],
        avgRating: 4,
        feeDetails: {
        restaurantId: "14594",
        fees: [
        {
        name: "BASE_TIME"
        },
        {
        name: "BASE_DISTANCE",
        fee: 5100
        },
        {
        name: "ANCILLARY_SURGE_FEE"
        }
        ],
        totalFee: 5100
        },
        parentId: "8823",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
        deliveryTime: 26,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2023-12-19 04:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { }
        },
        analytics: {
        context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/legacy-of-awadh-sector-8-dallupura-sector-8-delhi-14594",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            info: {
            id: "438435",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "Parsvnath Mall",
            areaName: "Mayur Vihar",
            costForTwo: "₹350 for two",
            cuisines: [
            "Burgers",
            "American"
            ],
            avgRating: 4.2,
            feeDetails: {
            restaurantId: "438435",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 3500
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 3500
            },
            parentId: "166",
            avgRatingString: "4.2",
            totalRatingsString: "1K+",
            sla: {
            deliveryTime: 26,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 05:00:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129"
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-parsvnath-mall-mayur-vihar-delhi-438435",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "787077",
            name: "Burgrill - The Win Win Burger",
            cloudinaryImageId: "a39bcdf9cf8481e007a7c5026adb30c0",
            locality: "Unit No. G-12",
            areaName: "Mayur Vihar",
            costForTwo: "₹350 for two",
            cuisines: [
            "Burgers",
            "Rolls & Wraps",
            "Snacks"
            ],
            avgRating: 4.4,
            feeDetails: {
            restaurantId: "787077",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 3500
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 3500
            },
            parentId: "302366",
            avgRatingString: "4.4",
            totalRatingsString: "20+",
            sla: {
            deliveryTime: 24,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 04:00:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80"
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-unit-no-g-12-mayur-vihar-delhi-787077",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "42688",
            name: "Dhading KTM",
            cloudinaryImageId: "bocsidmnhnwtwqm3fnzm",
            locality: "Lalita Park",
            areaName: "Laxmi Nagar",
            costForTwo: "₹300 for two",
            cuisines: [
            "Chinese"
            ],
            avgRating: 4.1,
            feeDetails: {
            restaurantId: "42688",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 4300
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 4300
            },
            parentId: "71981",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
            deliveryTime: 28,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 04:45:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            aggregatedDiscountInfoV2: { },
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/dhading-ktm-lalita-park-laxmi-nagar-delhi-42688",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "516395",
            name: "Hilton restaurant",
            cloudinaryImageId: "a6ylbndocvy5i64vjz31",
            locality: "Mandawali",
            areaName: "Pandav Nagar",
            costForTwo: "₹450 for two",
            cuisines: [
            "Biryani",
            "Fast Food",
            "Snacks",
            "Ice Cream"
            ],
            avgRating: 3.1,
            feeDetails: {
            restaurantId: "516395",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 3500
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 3500
            },
            parentId: "19233",
            avgRatingString: "3.1",
            totalRatingsString: "20+",
            sla: {
            deliveryTime: 31,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 23:59:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            aggregatedDiscountInfoV2: { },
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/hilton-restaurant-mandawali-pandav-nagar-delhi-516395",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "410374",
            name: "Murthal No.1 Parantha",
            cloudinaryImageId: "wvi0l0bds4gvjeltlrfz",
            locality: "Ganesh Nagar",
            areaName: "Mayur Vihar",
            costForTwo: "₹300 for two",
            cuisines: [
            "North Indian",
            "Street Food",
            "Punjabi",
            "Snacks",
            "Beverages"
            ],
            avgRating: 3.9,
            feeDetails: {
            restaurantId: "410374",
            fees: [
            {
            name: "BASE_DISTANCE",
            fee: 3500
            },
            {
            name: "BASE_TIME"
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 3500
            },
            parentId: "142082",
            avgRatingString: "3.9",
            totalRatingsString: "1K+",
            sla: {
            deliveryTime: 24,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 04:00:00",
            opened: true
            },
            badges: {
            textExtendedBadges: [
            {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
            }
            ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: {
            badgeObject: [
            {
            attributes: {
            description: "",
            fontColor: "#7E808C",
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available"
            }
            }
            ]
            }
            }
            },
            aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/murthal-no-1-parantha-ganesh-nagar-mayur-vihar-delhi-410374",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "33343",
            name: "Wow! Noodle",
            cloudinaryImageId: "xexoftiu0yymcicpnxai",
            locality: "L Block",
            areaName: "Sector 11",
            costForTwo: "₹300 for two",
            cuisines: [
            "Chinese",
            "Thai"
            ],
            avgRating: 3.6,
            feeDetails: {
            restaurantId: "33343",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 6400
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 6400
            },
            parentId: "13358",
            avgRatingString: "3.6",
            totalRatingsString: "10K+",
            sla: {
            deliveryTime: 34,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 04:00:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/wow-noodle-l-block-sector-11-delhi-33343",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
            info: {
            id: "14594",
            name: "Legacy of Awadh",
            cloudinaryImageId: "ammgqqcz0yntx8ts9o2f",
            locality: "sector 8",
            areaName: "Dallupura, Sector 8",
            costForTwo: "₹450 for two",
            cuisines: [
            "Mughlai",
            "Biryani",
            "North Indian",
            "Chinese"
            ],
            avgRating: 4,
            feeDetails: {
            restaurantId: "14594",
            fees: [
            {
            name: "BASE_TIME"
            },
            {
            name: "BASE_DISTANCE",
            fee: 5100
            },
            {
            name: "ANCILLARY_SURGE_FEE"
            }
            ],
            totalFee: 5100
            },
            parentId: "8823",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
            deliveryTime: 26,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2023-12-19 04:00:00",
            opened: true
            },
            badges: { },
            isOpen: true,
            type: "F",
            badgesV2: {
            entityBadges: {
            imageBased: { },
            textBased: { },
            textExtendedBadges: { }
            }
            },
            aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
            title: { },
            subTitle: { },
            message: { },
            customIcon: { }
            },
            differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: { },
            video: { }
            }
            },
            reviewsSummary: { },
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: { }
            },
            analytics: {
            context: "seo-data-2cc1d38f-470f-4a86-a6d7-19737946da13"
            },
            cta: {
            link: "https://www.swiggy.com/restaurants/legacy-of-awadh-sector-8-dallupura-sector-8-delhi-14594",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
    ];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        <RestroCard resData={reslist[0]} />
        <RestroCard resData={reslist[1]} />
        <RestroCard resData={reslist[2]} />
        <RestroCard resData={reslist[3]} />
        <RestroCard resData={reslist[4]} />
        <RestroCard resData={reslist[5]} />
        <RestroCard resData={reslist[6]} />
        <RestroCard resData={reslist[8]} />
        <RestroCard resData={reslist[9]} />
        <RestroCard resData={reslist[10]} />
        <RestroCard resData={reslist[11]} />
        <RestroCard resData={reslist[12]} />
        <RestroCard resData={reslist[13]} />
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Layout());
