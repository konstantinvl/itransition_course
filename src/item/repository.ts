import { Item } from '../app';
import { setTags } from '../tags/repository';
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
  console.log(item);
  const newItem = await Item.create({ ...item })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      throw Error(e);
    });
  // await setTags(newItem.tags);

  return newItem;
}

export async function changeItem(item: ItemInterface) {
  await Item.update({ ...item }, { where: { id: item.id } })
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  await setTags(item.tags);

  return Promise.resolve();
}

export async function deleteItem(id: number) {
  await Item.destroy({ where: { id: id } });
  return Promise.resolve();
}
