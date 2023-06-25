import { Button, Group, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React from "react";
import uuid from "react-uuid";
import usePlayersStore from "store/players.store";

const NewPlayer: React.FC = () => {
  const { addNewPlayers } = usePlayersStore();
  const form = useForm({
    initialValues: {
      name: ""
    },
    validate: {
      name: isNotEmpty("Name cannot be empty")
    }
  });

  const handleNew = (name: string) => {
    addNewPlayers({ name, uid: uuid() });
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(({ name }) => handleNew(name))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="your@email.com"
        {...form.getInputProps("name")}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};

export default NewPlayer;
