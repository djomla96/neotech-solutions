interface TableColumn<Key extends string = string> {
  key: Key;
  label: React.ReactNode;
}

interface TableData {
  id: string;
  [key: string]: React.ReactNode;
}
