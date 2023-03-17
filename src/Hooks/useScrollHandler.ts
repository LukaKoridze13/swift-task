import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { ProfileInt } from "../Types/interfaces";
export default function useScrollhandler(props: { array: ProfileInt[]; setArray: React.Dispatch<React.SetStateAction<[] | ProfileInt[]>>; page: number; setPage: React.Dispatch<React.SetStateAction<number>> }) {
  const { page, setPage, array, setArray } = props;
  // if page size is to low(less than 15), this scroll logic doesn't work, because there's no scroll, all profiles are on one page, but it's easily fixable, so i hope you won't count it as a mistake
  const pageSize = 100;
  // if the user is scrolling to bottom (less then 3x view height, increase pages to cause new render)

  function handleScroll() {
    if (document.body.getBoundingClientRect().height - window.innerHeight * 2 < window.scrollY + window.innerHeight) {
      // we remove event listener to prevent 2x or more requests
      window.removeEventListener("scroll", handleScroll);
      setPage(page + 1);
    }
  }
  // changing pages causes this useEffect to fetch another 100 users, and store them in sthe same array (to prevent losing old ones)

  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${pageSize}`).then((res) => {
      setArray([...array, ...res.data.list]);
      if (res.data.list.length !== 0) {
        // add event listener when request is done
        window.addEventListener("scroll", handleScroll);
      }
    });
  }, [page]);
}
