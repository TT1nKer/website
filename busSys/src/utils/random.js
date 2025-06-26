const names = ['小明', '小红', '小刚', '小丽', '小强', '小芳', '小军', '小燕', '小伟', '小婷', '小磊', '小霞', '小鹏', '小洁', '小波', '小玲', '小涛', '小娟', '小健', '小云']
export function getRandomName() {
  return names[Math.floor(Math.random() * names.length)]
} 