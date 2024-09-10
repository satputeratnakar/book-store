



import React, { useEffect, useState } from 'react'
import "./style.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BackImg from "../../assets/images/Back.svg";
import SearchImg from "../../assets/images/Search.svg";
import InfiniteScroll from 'react-infinite-scroll-component';

const BookList = () => {

    const { category } = useParams();
    const navigate = useNavigate();
    const [cardData, setCardData] = useState([])
    const [nextUrl, setNextUrl] = useState("")

    useEffect(() => {
        fetchBookList(category)
    }, [])


    const redireToHome = () => {
        let path = `/`;
        navigate(path);
    }

    const fetchBookList = async (val) => {
        const res = await fetch(`http://skunkworks.ignitesol.com:8005/books`)
        const data = await res.json()
        console.log("fetchBookList data", data);
        if (data.next) {
            setNextUrl(data.next)
        } else {
            setNextUrl("")
        }
        if (data.results && data.results.length > 0) {
            const filteredResults = data.results.filter(book =>
                book.subjects.some(subject => subject.includes(category))
            );
            setCardData(filteredResults)
        }
    }

    const handleBookClick = (val) => {
        // console.log("handleBookClick", val.formats);
        if (val.formats?.["text/html"]) {
            window.open(val.formats?.["text/html"], '_blank');
            // console.log("val.formats", val.formats?.["text/html"]);
        } else if (val.formats?.["application/rdf+xml"]) {
            window.open(val.formats?.["application/rdf+xml"], '_blank');
            // console.log("val.formats", val.formats?.["application/rdf+xml"]);

        } else if (val.formats?.["text/plain; charset=us-ascii"]) {
            window.open(val.formats?.["text/plain; charset=us-ascii"], '_blank');
            // console.log("val.formats", val.formats?.["text/plain; charset=us-ascii"]);
        }
        else {
            window.alert("No viewable version available!");
            // console.log("val.formats not Avail", val.formats);
        }
    }

    const handleSearchChange = async (val) => {
        const res = await fetch(`https://gutendex.com/books/?search=${val}`)
        const data = await res.json()
        if (data.results && data.results.length > 0) {
            const filteredResults = data.results.filter(book =>
                book.subjects.some(subject => subject.includes(category))
            );
            setCardData(filteredResults)
        }
    }


    const fetchMoreData = async () => {
        if (nextUrl) {
            const res = await fetch(`${nextUrl}`)
            const data = await res.json()
            // console.log("data", data);
            if (data.next) {
                setNextUrl(data.next)
            } else {
                setNextUrl("")
            }
            if (data.results && data.results.length > 0) {
                const filteredResults = data.results.filter(book =>
                    book.subjects.some(subject => subject.includes(category))
                );
                // console.log("fetchMoreData", cardData.concat(filteredResults));
                setCardData(cardData.concat(filteredResults))
            }
        }


    }

    const renderLatestCardData = () => {
        return (
            <div className="book-container"
                style={{ height: "600px" }} >
                {cardData.map((item) => {
                    return (
                        <div style={{ width: "200px", margin: "0 50px" }}>
                            <div className="book" onClick={() => {
                                handleBookClick(item)
                            }}>
                                <img
                                    src={`${item?.formats?.["image/jpeg"]}`}
                                    alt="The Old Man and the Sea"
                                    className="book_img" />
                            </div>
                            <label className="book_title book_head">{item?.title}</label>
                            <label className="book_title book_auth">{item?.authors[0]?.name}</label>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <div className="container mt-20">
                <div
                    className='c-pointer'
                    onClick={() => {
                        redireToHome()
                    }}
                >
                    <img className='mr-10' src={BackImg} alt="BackImg" />
                    <label className='cat_title'>{category}</label>
                </div>

                <label className="searchLabelWrap">
                    <span className="visually-hidden">Search</span>
                    <img className="icon" src={SearchImg} />
                    <input
                        type="search"
                        placeholder="Search"
                        className="searchInput"
                        onChange={(e) => {
                            handleSearchChange(e.target.value)
                        }}
                        name="Search"
                    />
                </label>
            </div>
            <div className='card_root'>
                <InfiniteScroll
                    height={"600px"}
                    dataLength={cardData.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading ... </h4>}
                >
                    {renderLatestCardData()}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default BookList;