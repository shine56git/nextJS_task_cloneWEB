import React from 'react'
import HomePage from '../HomePage'
import Header from '../../components/header/NavHeader'
import ContentScreen from '../common/ContentPage'
import GeneralContent from '../GeneralContent'
import RatingComp from '../RatingComp'
import AboutContent from '../common/AboutContent'

const Home = () => {
    return (
        <>
            <Header />
            <HomePage />
            <ContentScreen />
            <GeneralContent />
            <RatingComp />
            <AboutContent />
        </>
    )
}

export default Home