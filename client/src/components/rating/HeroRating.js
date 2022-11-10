const HeroRating = ({ data }) => {
  return (
    <>
      {data.vote_average > 0 ? (
        <div className="rating rating-sm 2xl:rating-md pointer-events-none">
          <input
            aria-label="herostar"
            type="checkbox"
            readOnly
            name="rating-1"
            className="mask mask-star"
            checked={
              data?.vote_average <= 2 && data?.vote_average !== 0 ? true : false
            }
          />

          <input
            aria-label="herostar"
            type="checkbox"
            readOnly
            name="rating-1"
            className="mask mask-star"
            checked={
              data?.vote_average <= 5 && data?.vote_average > 2 ? true : false
            }
          />

          <input
            aria-label="herostar"
            type="checkbox"
            readOnly
            name="rating-1"
            className="mask mask-star"
            checked={
              data?.vote_average <= 7 && data?.vote_average > 5 ? true : false
            }
          />

          <input
            aria-label="herostar"
            type="checkbox"
            readOnly
            name="rating-1"
            className="mask mask-star"
            checked={
              data?.vote_average <= 9 && data?.vote_average > 7 ? true : false
            }
          />

          <input
            aria-label="herostar"
            type="checkbox"
            readOnly
            name="rating-1"
            className="mask mask-star"
            checked={
              data?.vote_average > 9 && data?.vote_average === 0 ? true : false
            }
          />
        </div>
      ) : (
        <div className="rating rating-sm 2xl:rating-md pointer-events-none">
          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="rating-hidden hidden"
            checked
            readOnly
          />

          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="mask mask-star"
          />

          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="mask mask-star"
          />

          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="mask mask-star"
          />

          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="mask mask-star"
          />

          <input
            aria-label="herostar"
            type="checkbox"
            name="rating-1"
            className="mask mask-star"
          />
        </div>
      )}
    </>
  );
};
export default HeroRating;
