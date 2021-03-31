import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import { Button } from "../../components/Form/Button";
import { IFormInput } from "./formInput-model.";

export const MainLayout = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="wer"
        name="name"
        placeholder="Project Name"
        type="text"
        ref={register}
      />
      <Textarea
        id="7"
        name="description"
        placeholder="Project Description"
        rows={4}
        ref={register}
      />

      <Input
        id="w"
        name="timeAmount"
        placeholder="Time"
        type="text"
        ref={register}
      />
      <Textarea
        id="y"
        name="timeDescription"
        placeholder="Description"
        rows={4}
        ref={register}
      />

      <Button label="Create Project" type="submit" variant="outline" />
    </form>
  );
};
