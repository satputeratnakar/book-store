import React from 'react'
import "./style.css";
import NextArrow from "../../assets/images/Next.svg";
import FictionImg from "../../assets/images/Fiction.svg";
import AdventureImg from "../../assets/images/Adventure.svg";
import DramaImg from "../../assets/images/Drama.svg";
import HistoryImg from "../../assets/images/History.svg";
import HumourImg from "../../assets/images/Humour.svg";
import PhilosophyImg from "../../assets/images/Philosophy.svg";
import PoliticsImg from "../../assets/images/Politics.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const routeChange = (val) => {
        let path = `book-list/${val}`;
        navigate(path);
    }

    return (
        <div className="">
            <div className="head_img">
                <div className="pro">
                    <label className="pro_title">
                        Gutenberg Project
                    </label>
                    <br />
                    <label className="pro_desc">
                        A social cataloging website that allows you to freely search its database of books, annotations,
                        and reviews.
                    </label>
                </div>

            </div>
            <div className="cat">
                <div class="container mt-50">
                    <div class="row">
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Fiction") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={FictionImg}
                                                alt="Fiction"
                                                width="20"
                                                height="20"
                                                class="me-2"
                                            />
                                            <label className=" cat_text">Fiction</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Philosophy") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={PhilosophyImg}
                                                alt="Philosophy"
                                                width="20"
                                                height="20"
                                                class="me-2"
                                            />
                                            <label className="cat_text">Philosophy</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Drama") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={DramaImg}
                                                alt="Drama"
                                                width="20"
                                                height="20"
                                                class="me-2"
                                            />
                                            <label className="cat_text">Drama</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("History") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={HistoryImg}
                                                alt="History"
                                                width="20"
                                                height="20"
                                                class="me-2"
                                            />
                                            <label className="cat_text">History</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Humour") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={HumourImg}
                                                alt="Humour" width="20" height="20" class="me-2" />
                                            <label className="cat_text">Humour</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Adventure") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={AdventureImg}
                                                alt="Adventure" width="20" height="20" class="me-2" />
                                            <label className="cat_text">Adventure</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 c-pointer" onClick={() => { routeChange("Politics") }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={PoliticsImg}
                                                alt="Podium" width="20" height="20" class="me-2" />
                                            <label className="cat_text">Politics</label>
                                        </div>
                                        <img
                                            className='nxt_arr'
                                            src={NextArrow}
                                            alt="Next"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hello">

                <div class="genre-container">
                    <div class="genre-box">
                        <img src="icons/fiction.svg" class="genre-icon" alt="Fiction" />
                        <span class="genre-title">FICTION</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                    <div class="genre-box">
                        <img src="icons/philosophy.svg" class="genre-icon" alt="Philosophy" />
                        <span class="genre-title">PHILOSOPHY</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                </div>
                <div class="genre-container">
                    <div class="genre-box">
                        <img src="icons/drama.svg" class="genre-icon" alt="Drama" />
                        <span class="genre-title">DRAMA</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                    <div class="genre-box">
                        <img src="icons/history.svg" class="genre-icon" alt="History" />
                        <span class="genre-title">HISTORY</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                </div>
                <div class="genre-container">
                    <div class="genre-box">
                        <img src="icons/humour.svg" class="genre-icon" alt="Humour" />
                        <span class="genre-title">HUMOUR</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                    <div class="genre-box">
                        <img src="icons/adventure.svg" class="genre-icon" alt="Adventure" />
                        <span class="genre-title">ADVENTURE</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                </div>
                <div class="genre-container">
                    <div class="genre-box">
                        <img src="icons/politics.svg" class="genre-icon" alt="Politics" />
                        <span class="genre-title">POLITICS</span>
                        <span class="genre-cta">Explore</span>
                    </div>
                </div>
            </div> */}
            {/* <div className="render_cat">
                <div className="col-md-6 col-lg-6 cat_card" onClick={() => { routeChange("Fiction") }}>
                    <img
                        className="cat_icon"
                        src={FictionImg}
                        alt="Fiction"
                    />
                    <label className=" cat_text">Fiction</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-md-6 col-lg-6 cat_card" onClick={() => { routeChange("Philosophy") }}>
                    <img
                        className="cat_icon"
                        src={PhilosophyImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">Philosophy</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-md-6 col-lg-6 cat_card" onClick={() => { routeChange("Drama") }}>
                    <img
                        className="cat_icon"
                        src={DramaImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">Drama</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-md-6 col-lg-6 cat_card" onClick={() => { routeChange("History") }}>
                    <img
                        className="cat_icon"
                        src={HistoryImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">History</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-4 cat_card" onClick={() => { routeChange("Humour") }}>
                    <img
                        className="cat_icon"
                        src={HumourImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">Humour</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-4 cat_card" onClick={() => { routeChange("Adventure") }}>
                    <img
                        className="cat_icon"
                        src={AdventureImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">Adventure</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>
                <div className="col-4 cat_card" onClick={() => { routeChange("Politics") }}>
                    <img
                        className="cat_icon"
                        src={PoliticsImg}
                        alt="Fiction"
                    />
                    <label className="cat_text">Politics</label>
                    <img
                        className='nxt_arr'
                        src={NextArrow}
                        alt="Next"
                    />
                </div>


            </div> */}
        </div>
    )
}

export default Home