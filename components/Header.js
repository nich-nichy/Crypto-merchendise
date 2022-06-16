import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import news from '../pages/news'
import cryptoMerchendise from '../images/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
        wrapper: `bg-[#04111d] px-[1.2rem] py-[0.8rem] flex `,
        logoContainer: `flex items-center cursor-pointer w-[5px] h-[70px] mt-2 mb-2`,
        logoText: `text-white font-semibold text-xl -mt-[70px] ml-28 text-white flex -mr-96 mb-10`,
        searchBar: `flex flex-1 ml-[15.3rem] mt-[17px] mb-[17px] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
        searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
        searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
        headerItems: `flex items-center justify-end`,
        headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
        headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer pr-10`,
      }

const Header = () => {
    return <div className="bg-[#04111d] w-screen px-[1.1rem] py-[0.6rem] flex">
        <div className="w-[100px]">
            <div className="-mt-3 -mb-2">
            <Image src={cryptoMerchendise} className="text-white-100"/>
            <h2 className={style.logoText}>CRYPTO MERCHENDISE</h2>
            </div>
        </div>
 
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch />
            </div>
            <input className={style.searchInput} 
            placeholder="Search items, collections and more"
            />
        </div>
        <div className={style.headerItems}>
        <Link href="/collections/0xFA2dA67634080E7774c547Dbe4285bE256D5cEbD" >
            <a className={style.headerItem}> Collections</a>
        </Link>
            <Link href="https://thirdweb.com/dashboard/rinkeby/marketplace/0xD92a395F94864aE86fAE3f47a1Bb5491fC0E864d">
            <div className={style.headerItem}> Create</div>
            </Link>
            <div className={style.headerItem}> Resources</div>
            <Link href="/news">
            <a className={style.headerItem}> News </a>
            </Link>
            {/* <div className={style.headerIcon}>
                <CgProfile />
            </div> */}
            <Link href="/wallet">
            <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
            </div>
            </Link>
        </div>
    </div>
}

export default Header
