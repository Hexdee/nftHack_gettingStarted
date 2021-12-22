fs = require('fs');
nft = require('nft.storage');

NFTStorage = nft.NFTStorage;
File = nft.File;

const endpoint = 'https://api.nft.storage' // the default
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEzRUNiM2JkNTg0ZDY0REExRTQ5QTNGMTUxMWM2MTYxMDc3OWI2QUIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDE1ODA5NTA0NSwibmFtZSI6Im5mdEhhY2sifQ.oKwSim4KHdU7Nh30fvxaCCjTLryTV0lItRdM4idE994' // your API key from https://nft.storage/manage

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  const metadata = await storage.store({
    name: 'Christiano Ronaldo',
    description:
      'This is an NFT of Christiano Ronaldo',
    image: new File([await fs.promises.readFile('ronaldo.jpg')], 'ronaldo.jpg', {
      type: 'image/jpg',
    }),
  })
  console.log('IPFS URL for the metadata:', metadata.url)
  console.log('metadata.json contents:\n', metadata.data)
  console.log(
    'metadata.json contents with IPFS gateway URLs:\n',
    metadata.embed()
  )
}
main()