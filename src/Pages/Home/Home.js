import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='title'>bar à jus de fruits & smoothies</h1>
            <p className='p1'>Le Bar à Jus de Fruits et Smoothies sera votre animation préférée tout au long de l’année. C’est l’animation historique de JUJU’S ! Nous sélectionnons les meilleures recettes de cocktails de fruits et de smoothies, les assemblons et les mixons devant vous !
                Un large choix de recettes élaborées à partir de fruits et de légumes choisis avec soin : orange, pomme, banane, fraise, mangue, ananas, fruit de la passion, framboise, fruits rouges, kiwi, carotte, concombre, betterave… et de glace au yaourt probiotique pour de véritables smoothies.
                NOUVEAU ! Pour limiter les regroupements et respecter vos protocoles sanitaires, JUJU’S propose l’animation Bar à Jus de fruits & Smoothies au format ultra mobile. Dring Dring ! Notre JUJU’S Animateur, masqué et ganté, déambule dans les couloirs pour servir vos équipes directement dans les bureaux !
            </p>
            <h1 className='title'>charte qualité juju’s</h1>
            <div className='part2'>
                <h3>les ingrédients</h3>
                <p>Pour ses bars à jus de fruits JUJU’S sélectionne les meilleurs ingrédients et les livre sur le lieu de votre événement :</p>
                <ul>
                    <li className='listG'>Des fruits sélectionnés avec attention<span> auprès des producteurs pour leur teneur naturelle en sucre maximale (brix) : pas de sucres ajoutés dans les recettes « JUJU‘S » ! De plus, les fournisseurs de JUJU’S s’engagent sur des cahiers des charges rigoureux de culture raisonnée. En option, centrifugeuse et presse agrumes pour des jus pressés « à la minute ».</span></li>
                    <li className='listG'>Le meilleur 100% pur jus, <span>mis en bouteille au Pays Basque :</span>
                        <ul>
                            <li>du jus d’oranges cueillies à maturité et pressées dans la région de Valence en Espagne,</li>
                            <li> et/ou du jus de pomme artisanal pressés au Pays Basque.</li>
                        </ul>
                    </li>
                    <li className='listG'>Une glace au yaourt probiotique <span>allégée en matières grasses, pour de véritables smoothies.</span></li>
                </ul>
            </div>

            <div className='part2'>
                <h3>le matériel</h3>
                <p>Une animation réussie nécessite aussi <span className='sp3'>du matériel professionnel haut de gamme </span>: le choix des machines est primordial !</p>
                <p>JUJU’S utilise le matériel le plus performant du marché (blenders BLENDTEC, SANTOS ou WARING) et vous garantit la texture la plus onctueuse !</p>
            </div>

            <div className='part2'>
                <h3>les recettes</h3>
                <p>Dans le cadre de l’animation SmooCycle et Bar à Jus de Fruits & Smoothies, vous pourrez :</p>
                <ul>
                    <li className='listG'>choisir les recettes JUJU’S parmi les «best-sellers»,<span> les recettes JUJU’S de saison, les green smoothies ou les recettes gourmandes</span></li>
                    <li className='listG'>composer votre recette personnalisée,<span> toujours avec les garanties de la charte JUJU’S !</span></li>
                </ul>
                <p>Les recettes des jus de fruits et smoothies JUJU’S portent le nom de plages mythiques réputées pour la qualité de leurs vagues. Petit clin d’œil aux inventeurs du «smoothie» : des surfeurs californiens qui dans les années 70 se préparaient des cocktails de jus de fruits frais pour faire le plein de vitamines avant d’aller dans l’eau !</p>
            </div>

        </div>
    )
}

export default Home
