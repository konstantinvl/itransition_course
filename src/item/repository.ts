import { Item } from '../app';
import { ItemCreateInterface, ItemInterface } from './item';

export async function getAllItems() {
  console.log('itemList');
  const itemList = await Item.findAll()
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  console.log(itemList);
  return Promise.resolve<ItemInterface[]>(itemList);
}
export async function createItem(item: ItemCreateInterface) {
  const newItem = await Item.create({ ...item })
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  return newItem;
}

export async function changeItem(item: ItemInterface) {
  await Item.update({ ...item }, { where: { id: item.id } });
  return Promise.resolve();
}

export async function deleteItem(id: number) {
  await Item.destroy({ where: { id: id } });
  return Promise.resolve();
}
