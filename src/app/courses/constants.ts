export interface COURSE_TYPE  {
  id: string,
  author: string,
  subTitle: string,
  discount: number,
  discountValidTill: string,
  price: number,
  tags: string[],
  name: string,
  discountPrice: number,
  originalPrice: number,
  hoursLeft: number,
}

export const PAGE_SIZE = 5;

// export const COURSES = [{
//   "tags": [
//       "accusantium",
//       "suscipit",
//       "adipisci"
//   ],
//   "availability": '02/08/2022 23:31:30',
//   "description": "Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.",
//   "subname": "Tempore sed unde laboriosam qui consequatur rem.",
//   "discounted_price": null,
//   "price": "840.00",
//   "author": "Arthur Hansen",
//   "name": "doloribus sapiente facere sit laborum qui",
//   "id": "1"
// },
// {
//   "tags": [
//       "omnis",
//       "facere",
//       "nulla"
//   ],
//   "description": "Et impedit quis doloribus porro et hic. Qui laudantium dolorem repudiandae rerum. Expedita magni blanditiis et natus.\n \rMaiores ullam ut eos necessitatibus cum non. Delectus numquam et quia autem impedit voluptatem. Molestias numquam aspernatur. Exercitationem eum est ut.\n \rDignissimos doloremque iste inventore quam. Consectetur aliquam ea maxime cum harum aut. Quia deleniti unde architecto fugit suscipit ut. Necessitatibus dolorem ea. Consequatur ullam eum ut quam.",
//   "subname": "Placeat ut impedit laborum dolorum beatae omnis voluptate adipisci eveniet.",
//   "discounted_price": "564.00",
//   "price": "789.00",
//   "author": "Velma Mohr",
//   "name": "impedit velit eaque vero ut quod",
//   "id": "2"
// },
// {
//   "tags": [
//       "earum",
//       "cupiditate",
//       "aperiam"
//   ],
//   "description": "Distinctio officia rerum est ut quis excepturi quo maxime. Ut ut quia. Et cumque nemo et vel nostrum.\n \rConsequatur labore iusto architecto libero ullam dignissimos corrupti ipsa. Laboriosam placeat et et hic. Eaque et deserunt repellendus nulla asperiores quas labore vero fugit. Nesciunt aut omnis. Eius quas distinctio sed magni consequatur nisi et debitis.\n \rAtque vitae non aperiam. Repudiandae sint itaque est et dicta autem facilis. Esse repudiandae placeat quo optio pariatur eius libero reprehenderit. Nam nihil ut perspiciatis autem vitae et eum voluptatibus repellendus. Et eius aliquam nostrum quia. Eaque enim est maiores animi et autem.",
//   "subname": "Deserunt et porro animi doloribus et voluptas aliquid provident a.",
//   "discounted_price": null,
//   "price": "838.00",
//   "author": "Christine Anderson",
//   "name": "alias laudantium id nostrum laborum",
//   "id": "3"
// },
// {
//   "tags": [
//       "quas"
//   ],
//   "description": "Nihil voluptatem asperiores modi eos quia qui minus ad ea. Mollitia quasi doloribus necessitatibus deleniti dolores qui. Sed aut maxime et minima aut. Illum aut eveniet deserunt voluptas nisi repudiandae maxime sint.\n \rFacere eligendi iusto in est porro et sed velit. Laudantium quis voluptatibus est vel illum unde odit. Aliquid ducimus enim minima dolores debitis omnis sequi.\n \rTotam expedita tempora. Commodi ex voluptatum doloremque. Sit voluptas porro.",
//   "subname": "Rerum maxime sint.",
//   "discounted_price": "592.00",
//   "price": "735.00",
//   "author": "Doug Schiller",
//   "name": "saepe quam est",
//   "id": "4"
// },
// {
//   "tags": [
//       "rem",
//       "consequatur",
//       "vero"
//   ],
//   "description": "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
//   "subname": "Omnis enim rerum cum nihil voluptas commodi sit libero quo.",
//   "discounted_price": null,
//   "price": "728.00",
//   "author": "Terry Lubowitz",
//   "name": "at omnis nobis adipisci sint",
//   "id": "5"
// },
// {
//   "tags": [
//       "voluptatem",
//       "ea",
//       "ut"
//   ],
//   "description": "Ab dignissimos quo consequatur autem culpa maxime amet quidem voluptatem. Necessitatibus ut molestiae quia. Accusantium quia provident numquam.\n \rAut esse facere aut velit expedita molestiae temporibus. Nesciunt reprehenderit corrupti nulla cumque molestiae. Vel nobis voluptas eaque aut perspiciatis est est sint magni. Ea debitis quod corrupti.\n \rTotam distinctio sed explicabo et provident tempora. Ea aut autem. Et laborum blanditiis sapiente quidem mollitia possimus et earum qui. Voluptate ut et error nemo libero quo.",
//   "subname": "Facere sit consectetur sunt sunt rerum libero doloremque fuga.",
//   "discounted_price": "560.00",
//   "price": "819.00",
//   "author": "Jacquelyn Vandervort",
//   "name": "voluptates similique mollitia veniam",
//   "id": "6"
// },
// {
//   "tags": [
//       "alias",
//       "aut"
//   ],
//   "description": "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
//   "subname": "Voluptas doloremque accusamus ipsum facere impedit sed.",
//   "discounted_price": "550.00",
//   "price": "722.00",
//   "author": "Karla Dibbert",
//   "name": "nostrum quod provident quia",
//   "id": "7"
// },
// {
//   "tags": [
//       "aut",
//       "itaque"
//   ],
//   "description": "Vel alias tempore molestiae deleniti dolor non. Tempore qui dignissimos exercitationem qui deserunt illum ipsum possimus eligendi. Aut cumque qui qui aperiam fugit. Ut laboriosam maxime veritatis veniam velit. Blanditiis et sit labore ad quis maiores et qui adipisci.\n \rMaxime quibusdam itaque modi. Tenetur ipsa eligendi ut sunt. Voluptatum id sint cupiditate.\n \rDolor autem sit nisi. Et ea et quas. Omnis qui sunt. Est cum quasi quia minima.",
//   "subname": "Ipsam ut corporis omnis minima libero.",
//   "discounted_price": "648.00",
//   "price": "712.00",
//   "author": "Dr. Ollie Kuhn",
//   "name": "sequi magnam id culpa",
//   "id": "8"
// },
// {
//   "tags": [
//       "voluptatum"
//   ],
//   "description": "A est sed repellat. Dicta ut expedita accusantium ipsum quis quo. Facere culpa animi quo iste. Impedit ut quam et. Culpa odit id. Eos nostrum qui molestias eos non harum.\n \rEst aut omnis. Quae maiores quidem similique dolorem nemo ut corporis. Dolor rem voluptas qui sed. Tenetur reiciendis qui ipsam modi. Ipsa quia et voluptatum quae maiores. Mollitia quis saepe consequuntur et cum consequatur.\n \rQuos optio ab dolor officiis. Rem exercitationem velit quam voluptatem sed aliquam in atque itaque. Ullam laudantium voluptas aliquid accusantium eos. Neque dolores nam non dolorem.",
//   "subname": "Delectus est aut eius magni officia dignissimos quasi.",
//   "discounted_price": "652.00",
//   "price": "775.00",
//   "author": "Ana Schimmel",
//   "name": "veritatis occaecati sint eos",
//   "id": "9"
// },
// {
//   "tags": [
//       "dolorum",
//       "voluptatum"
//   ],
//   "description": "Quo error incidunt reiciendis fuga esse eos. Non consequatur aliquid ea a nemo tempora aperiam. Placeat sunt earum et ut adipisci explicabo. Tempora voluptatem amet mollitia qui sunt. Itaque autem quas nihil dignissimos et voluptatem. Et et porro perspiciatis et rerum dolor asperiores blanditiis.\n \rPerspiciatis dolorum accusamus nam perferendis molestiae est libero voluptatem consectetur. Hic repudiandae magni ea dolores totam. Voluptatem labore voluptates soluta molestias. Deleniti ea fuga veritatis non pariatur.\n \rMolestias dolores blanditiis reiciendis. Dolores voluptatem tenetur nemo dicta iure id enim. Tenetur et laboriosam facilis sint vel sunt dolore. Voluptas nulla porro ullam temporibus ut voluptatibus deleniti quod. Sed qui sed at sed. Sed eius dolore.",
//   "subname": "Voluptas voluptatibus excepturi corporis.",
//   "discounted_price": "589.00",
//   "price": "704.00",
//   "author": "Chester Corkery",
//   "name": "delectus et ea aut ipsum assumenda",
//   "id": "10"
// },
// {
//   "tags": [
//       "omnis",
//       "consectetur",
//       "voluptas"
//   ],
//   "description": "Aperiam iure ut quidem minima. Dolorem error amet mollitia occaecati cum qui aperiam. Vel sunt alias aut aut autem. Iure itaque at corporis voluptatem tenetur. Sed facere et voluptatem eum veritatis repudiandae alias rerum minus. Similique consequuntur assumenda dolores nisi autem sapiente nihil.\n \rVeritatis ut voluptatum deserunt numquam molestias et in rerum. Sit sapiente molestiae non officia illo asperiores. Non sunt quaerat et recusandae.\n \rSint magnam possimus. Rerum neque ducimus temporibus nihil. Blanditiis omnis et.",
//   "subname": "Excepturi eum autem odio perferendis sit sit.",
//   "discounted_price": "683.00",
//   "price": "764.00",
//   "author": "Amy Bins",
//   "name": "ut rerum ipsam quos ratione aut",
//   "id": "11"
// },
// {
//   "tags": [
//       "distinctio"
//   ],
//   "description": "Consequuntur rerum dolorum reprehenderit sunt excepturi quia dolore. Nulla ullam et alias occaecati cum aut in aut occaecati. Eveniet aspernatur ut nisi nostrum reiciendis quo et. Iste sed dolorem sit fuga enim quis eligendi. Excepturi cupiditate esse omnis quisquam.\n \rVoluptatibus asperiores ut enim voluptas placeat. Voluptatem laborum ex excepturi quasi magni atque aperiam incidunt dignissimos. Nesciunt reprehenderit minus voluptatibus molestias illum quasi quia ut.\n \rEnim rerum ut. Ut placeat molestiae hic. Aut eos dolores voluptas laudantium aut qui vero voluptas dolores. Dolorem mollitia incidunt officiis. Quasi minus rerum delectus. Et reiciendis vel enim veniam sint.",
//   "subname": "Tenetur aut omnis iure aut eaque itaque repellat itaque possimus.",
//   "discounted_price": "609.00",
//   "price": "737.00",
//   "author": "Julie Hilpert",
//   "name": "et voluptate tempore fugiat laudantium",
//   "id": "12"
// },
// {
//   "tags": [
//       "autem",
//       "minus",
//       "quia"
//   ],
//   "description": "Repellat occaecati velit nulla eum enim. Dolor corporis id quas voluptas dolorem. Et impedit et dolore. Repudiandae est quibusdam omnis sed ut. Vel in minima unde. Soluta sunt in vel nostrum vitae atque unde id.\n \rSint est mollitia non excepturi quo optio. Eum odio necessitatibus ut ipsam. A unde natus error qui ut. Modi et labore dolores odit sapiente voluptas quibusdam.\n \rNumquam unde rerum iusto et deserunt. Amet rerum voluptatum ut magni pariatur id. Quia alias sunt earum sit. In sit aut quaerat. Voluptatum magni dolore repudiandae asperiores voluptate ea possimus fugit. Autem quidem dolores impedit ducimus hic.",
//   "subname": "At et a cumque exercitationem.",
//   "discounted_price": "594.00",
//   "price": "855.00",
//   "author": "Benny Swaniawski",
//   "name": "ea sint repudiandae temporibus sit maiores",
//   "id": "13"
// },
// {
//   "tags": [
//       "delectus"
//   ],
//   "description": "Asperiores a optio ipsum. Quia aut illo et atque aspernatur nulla asperiores ipsa. Ad error sed qui odit sint non repellendus. Dicta mollitia consequuntur repudiandae dolorum. Molestiae dolorem earum est alias iure nostrum magnam molestias.\n \rVitae exercitationem facilis voluptatem rem laudantium animi maxime blanditiis. A praesentium laborum nulla. Veniam adipisci beatae. Eum voluptatem cumque odio quibusdam officia. Deleniti dolorem a. Maxime ea similique laborum recusandae molestias ut blanditiis officia.\n \rIure vitae ea alias ut porro eaque. Repudiandae incidunt velit ullam excepturi omnis est et. Qui et ipsa odit nihil voluptatem unde. Inventore molestias quam magnam.",
//   "subname": "Quis voluptates aut vero esse et qui.",
//   "discounted_price": null,
//   "price": "818.00",
//   "author": "Tricia Goodwin",
//   "name": "et ut est nesciunt nam atque",
//   "id": "14"
// },
// {
//   "tags": [
//       "nihil",
//       "ab"
//   ],
//   "description": "Cum totam cum eius. Quos ut molestiae rerum. Laudantium repudiandae et temporibus. Eos ipsa voluptatem ut consequatur provident. Quia delectus dolor voluptates quas dolor exercitationem deleniti aut non. Molestias itaque autem nesciunt.\n \rAnimi nihil nesciunt. Voluptas dolor reprehenderit voluptas non. Enim quod impedit maiores distinctio fugiat et quo sapiente omnis. Et sint possimus nostrum nihil reiciendis. Numquam neque nisi incidunt quasi perferendis architecto necessitatibus sit. Architecto fugiat maxime.\n \rQuisquam ut praesentium aliquam aut ullam. Qui mollitia voluptatum dolorum. A est alias ducimus aut.",
//   "subname": "Accusantium maiores asperiores ut quia omnis rerum.",
//   "discounted_price": "655.00",
//   "price": "835.00",
//   "author": "Kelvin Dooley",
//   "name": "doloribus neque aliquam",
//   "id": "15"
// }
// ]

export const COURSES  = [
  {
    id: '1',
    author: 'Steve',
    subTitle: 'This is a starter course for Deep dive into swift handling',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 10,
    discountValidTill: '03/07/2022 22:31:30',
    price: 10000,
    tags: ['world','saving'],
    name: 'Deep dive into swift',
  },
  {
    id: '2',
    author: 'Loki',
    subTitle: 'TypeScript',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 7,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['mischief'],
    name: 'Deep dive into typescript',
  },
  {
    id: '3',
    author: 'Hardy',
    subTitle: 'Angular Course',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 8,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['Angular'],
    name: 'How to learn Angular',
  },
  {
    id: '4',
    author: 'Stephen',
    subTitle: 'Typescript Course',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 9,
    discountValidTill: '',
    price: 1400,
    tags: ['TypeScript'],
    name: 'How to learn Typescript',
  },
  {
    id: '5',
    author: 'Maximilian',
    subTitle: 'Angular Essentials',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 10,
    discountValidTill: '',
    price: 1400,
    tags: ['Angular'],
    name: 'How to start angular',
  },
  {
    id: '6',
    author: 'Harry',
    subTitle: 'Angular Crash Course',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 11,
    discountValidTill: '',
    price: 1400,
    tags: ['Angular'],
    name: 'How to begin Angular',
  },
  {
    id: '7',
    author: 'Maximilian',
    subTitle: 'Complete Angular Course',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 12,
    discountValidTill: '',
    price: 1400,
    tags: ['Angular'],
    name: 'Deep dive into Angular',
  },
    {
    id: '8',
    author: 'Steve',
    subTitle: 'This is a starter course for Deep dive into swift handling',
    description: "Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.",
    discount: 10,
    discountValidTill: '',
    price: 10000,
    tags: ['world','saving'],
    name: 'Deep dive into swift',
  },
  {
    id: '9',
    author: 'Loki',
    subTitle: 'TypeScript',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 7,
    discountValidTill: '',
    price: 1400,
    tags: ['mischief'],
    name: 'Deep dive into typescript',
  },
  {
    id: '10',
    author: 'Hardy',
    subTitle: 'Angular Course',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 8,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['Angular'],
    name: 'How to learn Angular',
  },
  {
    id: '11',
    author: 'Stephen',
    subTitle: 'Typescript Course',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 9,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['TypeScript'],
    name: 'How to learn Typescript',
  },
  {
    id: '12',
    author: 'Maximilian',
    subTitle: 'Angular Essentials',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 10,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['Angular'],
    name: 'How to start angular',
  },
  {
    id: '13',
    author: 'Harry',
    subTitle: 'Angular Crash Course',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 11,
    discountValidTill: '',
    price: 1400,
    tags: ['Angular'],
    name: 'How to begin Angular',
  },
  {
    id: '14',
    author: 'Maximilian',
    subTitle: 'Complete Angular Course',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 12,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['Angular'],
    name: 'Deep dive into Angular',
  },
  {
    id: '15',
    author: 'Maximilian',
    subTitle: 'Complete Angular Course',
    description: "Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.",
    discount: 12,
    discountValidTill: '03/07/2022 22:31:30',
    price: 1400,
    tags: ['Angular'],
    name: 'Deep dive into Angular',
  }
];


export const MODAL_MESSAGES = {
  ORDER_PLACED : 'You have successfully placed your order.',
  ADD_TO_CART_SUCCESS : 'Course successfully added in the cart.',
  ADD_TO_CART_ERROR: 'Already exist in cart.',
  PROFILE_SAVED: 'Your profile is saved!',
  ADD_TO_WISHLIST_SUCCESS : 'Course successfully added in the wishlist.',
  ADD_TO_WISHLIST_ERROR: 'Already exist in wishlist.',
}

export const ORDER_BY = {
  ASC: 'asc',
  DESC: 'DESC'
}
