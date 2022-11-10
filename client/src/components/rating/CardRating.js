const CardRating = ({ item }) => {
  return (
    <>
    {item.vote_average > 0 ?
      <div className="rating rating-sm pointer-events-none">
        <input 
          aria-label="card"
          type="checkbox"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          readOnly
          defaultChecked={
            item.vote_average <= 2 && item.vote_average > 0 ? true : false
          }
        />
        <input 
          aria-label="card"
          type="checkbox"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          readOnly
          defaultChecked={
            item.vote_average <= 5 && item.vote_average > 2 ? true : false
          }
        />
        <input 
          aria-label="card"
          type="checkbox"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          readOnly
          defaultChecked={
            item.vote_average <= 7 && item.vote_average > 5 ? true : false
          }
        />
        <input 
          aria-label="card"
          type="checkbox"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          readOnly
          defaultChecked={
            item.vote_average <= 9 && item.vote_average > 7 ? true : false
          }
        />
        <input 
          aria-label="card"
          type="checkbox"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          readOnly
          defaultChecked={
            item.vote_average > 9 || item.vote_average === 0 ? true : false
          }
        />
      </div>
      :
      <div className="rating rating-sm pointer-events-none">
        <input aria-label="card" type="checkbox" name="rating-6" className="rating-hidden hidden" readOnly checked />
        <input aria-label="card" type="checkbox" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input aria-label="card" type="checkbox" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input aria-label="card" type="checkbox" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input aria-label="card" type="checkbox" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input aria-label="card" type="checkbox" name="rating-6" className="mask mask-star-2 bg-orange-400" />
      </div>
      }
    </>
  );
};
export default CardRating;
