import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header';
import nft from "../../images/NFT.jpg"

const News = () => {
    return (
        <div>
        <div>
            <Link href="/header">
            <Header />
            </Link>
        </div>
        <div>
            <h2 className="text-center text-white text-4xl font-bold mt-5"> Welcome crypto user...</h2>
            <h4 className="text-xl text-bold text-white pl-10">Introduction:</h4>
            <p className="p-5 pl-14 pr-14 text-lg text-white">you are here to gain real world knowledge about NFTS and more. NFTs are taking over the world at a record pace as the number of digital art collectors and creators increases. The popularity of NFTs has resulted in the development of a huge community that is active on various social media, forums, and blogs.
            Just what are NFTs? It's the question everyone is asking as digital art explodes in value. While NFTs have been around for a few years it took Beeple, CryptoPunks and Bored Ape Yacht Club to put this new technology on the map. Since then Adidas, Nike, Disney, McDonalds and many celebrities has jumped into NFTs.
            Answering the question, 'what are NFTs?' is the easy part: non-fungible tokens are a way of registering a one-of-a-kind image, video, or any form of digital, or indeed, physical item on a blockchain. It's decentralised and open to scrutiny. 
            NFTs can still be tricky to understand, however, and the more they make headlines the harder it is – after all, if a photo of an NFT bin sells for 252k then anything is possible
            If you’re interested in learning more about NFTs and staying in touch with the latest developments, it’s important to follow some popular NFT bloggers</p>
            <h4 className="text-xl text-white pl-10">News:</h4>
            <p className="text-lg text-white mt-5 pl-14 pr-14">Whether you decide they're a speculative fad or a great new possibility for artists, there's no denying that NFTs are making headlines, and some creatives at least have turned them into a business. So what are NFTs? Read on to learn about how NFTs work, how they're made, and why they're so controversial.
            Once you're clued up, you're ready to read the rest of our series of pieces on the world of NFTs. We have articles on the NFT gaming and on the best NFT crypto for creatives. If you decide to venture into making NFTs of your own, see our guides to how to make and sell an NFT.</p>
            <br/><p className="text-white ml-10 text-xl">Bay leafs:</p><br/>
            <div className="flex">
                 <p className="text-white text-lg pl-14 pr-20">This is one of their first and famous NFT of Bay Leafs it made 5140 lakhs 💸🤑💸 worth of indian money for the owner right now. On the beginning stage of listings it worth 0.7eth which costs just 4500Rs of indian money now he made more than 99.9999% in profits. So indian users make sure to see your future profits on Assets. They are just ruling the jungle, Any kind of easily reproduced digital file can be stored as an NFT in order to identify the original copy. The NFTs you're most likely to have seen or read about tend be minted from trippy futuristic motion artworks, NFTs can be made from any kind of photography, art, music or video file. Even tweets and memes have been made into NFTs. To help, we've outlined the NFT trends for 2022.</p>
                 <div className="w-4/5 h-3/5 mr-36">
                 <Image src={nft} className="mr-10 pr-10"/>
                 </div>
                 <br/>
            </div>

            <p className="text-white text-xl pl-10">Exchange NFTs for other NFTs and crypto</p>
            <p className="text-lg text-white pl-14 pt-5 pr-14">Have you bought an NFT for $200 and want to swap it for other one that costs $50 and let other user to pay you up to total value another $150 in BUSD? With this feature you will be able to trade your NFTs for other NFTs and cryptocurrencies.
            The unique identity and ownership of an NFT is verifiable via the blockchain ledger. They were first launched on the Ethereum(opens in new tab) blockchain, but other blockchains including FLOW and Bitcoin Cash now also support them. Whether the original file is a JPG, MP3, GIF or anything else, the NFT that identifies its ownership can be bought and sold just like any other type of art – and, like with physical art, the price is largely set by market demand.
            If you wandered into a gift shop of an art gallery, you'd find a number of replicated prints of famous masterpieces, well there are some NFTs that act the same way. There are parts of the blockchain that are totally valid, but they wouldn't hold the same value as the original. 
            NFTs will most likely come with a license to the digital asset it points to, but this doesn't automatically confer copyright ownership. The copyright owner may reproduce work and the NFT owner gains no royalties. Artist Chris Petrocchi explains secondary sales and royalties in his video tutorial on how to create NFT art.
            </p>
            <h2 className="text-white pl-10 text-xl mt-10">Conclusion</h2>
            <p className="text-white text-lg mt-5 ml-14 mr-14">Even the US basketball league NBA has got involved. NBA Top Shot(opens in new tab) is a way of selling digital collectables in the form of trading cards embedded with iconic basketball moments. With a plan to add virtual jewellery, accessories and clothing that can be used across social media, the NBA is aiming to expand this revenue stream as far as it can go. 
            It also turns out that even tweets can hold value. Twitter co-founder Jack Dorsey sold  the first-ever tweet(opens in new tab) (sent by him to announce he was setting up his account) for a staggering $2,915,835.47. Musicians are also selling the rights and originals of their work, as well as short videos to clips of their music, and you can even buy digital real estate and 3D assets like furniture as NFTs.

            </p>
            <div className="border border-white m-10">
            <h2 className="text-white text-xl ml-[25rem] mt-10">So just buy an nft in our best indie market by clicking the button below.</h2>
            <p className="ml-[38rem] text-bold mt-5">👇👇👇👇👇👇👇👇👇👇👇👇👇</p>
            <Link href="/collections/0xFA2dA67634080E7774c547Dbe4285bE256D5cEbD" >
            <button className="align-center bg-blue-500 mt-5 ml-[40rem] rounded border border-blue-700 p-2 pl-8 pr-8 mb-20">Collections</button>
            </Link>
            </div>
        </div>
        </div>
    )
}

export default News;
