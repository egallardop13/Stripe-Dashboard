import { Field, Label } from "./ui/fieldset";
import { Input } from "./ui/input";

function Search() {
  return (
    <>
      <Field>
        <Label className=" flex  ">
          <Input name="search" placeholder="search" />
        </Label>
      </Field>
    </>
  );
}
export default Search;
