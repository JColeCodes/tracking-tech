const { Post } = require('../models');

const postData = [
    {
        title: 'Green Jellied Eggs in the Freezer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 5
    },
    {
        title: 'Showering Opera Rats Eating Soap',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        user_id: 1
    },
    {
        title: 'Flying Beaks with Opinions the Size of Feet',
        content: 'Morbi nisi purus, sollicitudin ut turpis quis, faucibus aliquet nunc. In hac habitasse platea dictumst. Donec congue tincidunt lacinia. Aliquam vel posuere leo, vel ultricies nunc. Mauris eu mauris nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet ligula dapibus, ornare neque ac, aliquet risus. Curabitur id est vel odio efficitur dapibus. Vestibulum sit amet faucibus massa, vestibulum consequat diam. Donec suscipit ante arcu. In eget placerat ex. Suspendisse tellus sem, pellentesque consequat nunc non, fringilla semper odio. Ut sollicitudin, tellus non aliquam hendrerit, nulla turpis semper quam, lacinia posuere nunc ante et lectus. Curabitur luctus neque est, sed vulputate ipsum rutrum non.',
        user_id: 4
    },
    {
        title: 'Desireable Darkness Killer upon a Pedestal of Egos',
        content: 'Nullam ac lectus porttitor, vulputate magna sit amet, sagittis libero. Proin nunc felis, semper eu lorem vel, fermentum tincidunt ligula. Donec nec nisi ante. Donec malesuada placerat tincidunt. Duis accumsan est et est luctus suscipit. Morbi in turpis maximus, ullamcorper mauris eget, sodales eros. Vivamus iaculis commodo ipsum. Cras odio dolor, faucibus sed tempus tempor, iaculis eget mauris. Ut placerat viverra vestibulum. Pellentesque vitae odio elit. Proin dapibus dictum sem at porttitor. Donec at dapibus tortor.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;