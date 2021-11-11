import { useEffect, useState } from "react";

const useReview = () => {
  const [reviewItem, setReviewItem] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-wave-02236.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviewItem(data));
  }, []);

  return [reviewItem];
};

export default useReview;
