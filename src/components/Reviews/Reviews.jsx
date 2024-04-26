import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <div>
        <ul className={css.review_list}>
          {reviews.map((item) => (
            <li key={item.author} className={css.review_list_item}>
              <span className={css.review_list_author}>{item.author}</span>

              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
