import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form1 = () => {
  //const [person, setPeron] = useState({ name: "", age: 0 });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  {
    /*const handleClick = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };*/
  }
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
          type="text"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p>The name should has more than 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          className="form-control"
          {...register("age", { required: true, minLength: 2 })}
          type="text"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age is required</p>
        )}
        {errors.age?.type === "minLength" && (
          <p>The age should be greater than 9 </p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form1;
