import { useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/reducers/signupReducer";

const TrelloCardField = ({ id, trelloId, showFile }) => {
  const dispatch = useDispatch();

  const submitHandler = (values, action) => {
    if (values.title.trim().length > 3) {
      dispatch(
        addCard({
          pageId: id,
          title: { ...values, id: Math.random().toString() },
          trelloId,
        })
      );
      return reset();
    }
  };

  const closeTrelloCardFieldHandler = () => {
    showFile();
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <textarea
        rows="4"
        className={`textarea ${errors.title && 'error' }`}
        placeholder="Enter a title for this card..."
        {...register("title", {
          minLength: 4,
        })}
      />
      {errors.title && <p className="error">Please enter more than 3 character</p>}
      <div className="buttons">
        <button className="button">
          <BsPlusLg /> Add card
        </button>
        <button
          className="button"
          type="button"
          onClick={closeTrelloCardFieldHandler}
        >
          close
        </button>
      </div>
    </form>
  );
};

export default TrelloCardField;
