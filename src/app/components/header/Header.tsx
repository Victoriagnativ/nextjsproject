'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserInfo from "@/app/components/UserInfo";

const Header = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/genres">Genres</Link></li>
                    <li><UserInfo /></li>
                </ul>

            </nav>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button  className='btn-search' onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;
