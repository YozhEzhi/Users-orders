const dream = require('dreamjs');
const jsonfile = require('jsonfile');

const config = {
  usersPath: './public/users.json',
  ordersPath: './public/orders.json',
  usersAmount: 50,
  ordersAmount: 500,
  startCardNumber: 10126860,
};

dream.customType('incrementalId', helper => helper.previousItem ? helper.previousItem.id + 1 : 0);

const formatCardNumber = (num) => {
  const newNum = num * 1.2;
  const slicedString = parseInt(newNum, 10).toString().slice(0, 8);
  return parseInt(slicedString, 10);
};

dream.customType('user-card', (helper) => {
  const item = helper.previousItem;
  if (
      item &&
      (item.id + 1) % config.usersAmount !== 0
  ) {
    return formatCardNumber(item.cardNumber);
  }

  return config.startCardNumber;
});

dream.schema('user', {
  id: 'incrementalId',
  firstName: 'first',
  secondName: 'last',
  middleName: 'first',
  cardNumber: 'user-card',
});

dream.customType('order-date', (helper) => {
  return helper.chance.date({ year: 2017, american: false }).toDateString();
});
dream.customType('order-sum', helper => helper.chance.dollar({ min: 90, max: 100 }));
dream.customType('order-discount', helper => helper.chance.dollar({ min: 60, max: 89 }));

dream.schema('order', {
  id: 'incrementalId',
  cardNumber: 'user-card',
  date: 'order-date',
  sum: 'order-sum',
  discount: 'order-discount',
});

dream.useSchema('user')
  .generateRnd(config.usersAmount)
  .output((err, result) => {
    jsonfile.writeFile(config.usersPath, result, () => {
      console.info(err || `Data was generated and placed to ${config.usersPath}`);
    });
  });

dream.useSchema('order')
  .generateRnd(config.ordersAmount)
  .output((err, result) => {
    jsonfile.writeFile(config.ordersPath, result, () => {
      console.info(err || `Data was generated and placed to ${config.ordersPath}`);
    });
  });
