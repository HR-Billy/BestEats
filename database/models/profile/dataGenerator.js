const authIds = [
  '13mmilsteadciDIGE1n', '14mwalhedddum3o8EYUp', '15squaltroughe59c9bx', '16sglasermanfToM7xpD', '17bwingfieldgaOAugmgG', '18tzywickiheDyj4Bu9kT', '19bcatchesideineDWRg', '20xpazjL4DVOk6v6', '21dmccardkpepz11LTspa', '22eschmuhlltGJZuhIGnh', '23cgaddesbymLg5cYmYZsuy3', '24kchadbournnzTvpofnz', '25ddumbralloph01Ha', '26cwallbankspvtrqV3', '27sthorndaleqgqLobnrVztrB', '28rrenoufraR9SwMlKGSM', '29mgiacomettisM1xJgQENQUjS', '30sscotfordtgIJmpb6', '31sfarreyuLVzLZ9HprSan', '32criggollvIQTEkZywft7', '33mlivelyw0ewmRA1bk', '34cgudexdUYmdbAaB0hl', '35zadamovyFxTa1QKPE', '36bjoppichzfNzy9b0', '37dbluett10DoE0KQoPgIsO', '38bbruckent11wkSU1bopG0Z', '39mfollit12TYRFBpM', '40sturbard13I0uQIxe', '41plockney14bYcd2xM', '42aojeda153n0j35', '43vlabbett16Ig6ruUNjdyq', '44odorsay17pdYHC8hgl', '45clinde18m6vw9rf', '46scanto19jQU4AGV', '47dsteggles1aknzIxVECW', '48fdrew1by2kTJZKV7r', '49sargile1cqUPtgj5bc', '50gker1daeKrLYen', '51jmasedon1eQi8RcRZOT', '52aknappett1fO7hcNVUrBP', '53ghulks1gVjnDhOm', '54lgives1hl1EPqXGFT4P', '55egadsby1iYQbfUGCYnzN', '56cfranchi1jcGGQZWq', '57aoflynn1kEKlr1XkDNCO', '58apecey1luEOBsCQWGx', '59dweber1meKrbNM03n0XK', '60gkarsh1nr5Am6wpa', '61wlind1o7SXHbfnw0OFq', '62drosewell1pZqwJMpKPun8', '63scarwithan1q6K2rgeTtP9', '64pvalentelli1r3saDcG00', '65rcraven1snC68MjF', '66vchilver1tclh15eJ', '67eodams1uFBmC0Oy', '68vhuckel1vcfUyIhHudJHi', '69ochrestien1wB802ICwg', '70jablott1xKxW2r6f', '71plarkin1yG0HgWKWDxWZ', '72ndenson1z564FHLjGO0', '73cgreenless200gFamCVCQxf', '74mdemoge21REYWMazL7e', '75pcardillo22y2wVE4', '76candrusov23BMOossLwj0x', '77llightbourn24ESIND9m', '78rmarre25DoOVpKd2', '79ehuskinson268GRzChr', 'auth0|61725450ff86f6006a3c4805', '80kchaperling279PiB1XGIK', '81pjankiewicz28Cjwizw', '82groake29fSFsyeZMU', '83mgoodoune2aokBeDWF0', '84dgallegos2btbFxroRF', '85ldunbabin2cZxvRriCHX2', '86hlenoury2doCSt107', '87wcollihole2e9RC09sY', '88mgress2fobC3wrLar', '89jscanes2gnl7NVBnH', '90bebbetts2h75bxy2xl', '91pmcshea2iy8jnglv', '92hfetherstonhaugh2joD1sq85bc', '93ldavies2kLwTizZt', '94cspaunton2lWI0uf8', '95rtoft2mIdhcGLat', '96hdunthorn2nszhMLaslSFOS', '97amcnern2oKpvPXA', '98dsherrard2prZbuJzVd4B', '99ckeddle2qWIqIdW9', '100grollett2repBHcq3GY', '101cwaszczyk2sQkda5IxG9uL', '102lpetegrew2tByY9oXQ4w', '103shasser2uJ4pe1WyB1', '104fdjokovic2vrIiAF9', '105kryves2wEWJgKz', '106mhiscoe2xlf8micw', '107mstrang2yPKn5P9zpBiAu', '108rpercy2zAxOw0Ir', '109mcreyke307r2VUfMMG7D', '110cmacgeffen31KynnY9ZNncjP', '111ecomo32C6qJzkD', '112gcummins337Avrz0', '113rgoslin34331xb00', '114ebarhem35GNcNKq8DkU', '115vscimonelli36QIBNsWJ', '116zbarsam37SwBrv2c4P', '117fspiller38Yp7jTxEG', '118fmewton39ctcCdJy', '119tdelafield3a01wphLM', '120cgebb3bZc2JYq', '121ocarwithen3cPq9IoF0w2', '122esimester3dowSdqyAS', '123dpetel3eOjmCqeec', '124kcoopman3fnVkzoSrj2', '125ealliban3gTMnS50g', '126dbunny3hbQHugk', '127lahren3iXPZg0v', '128hollerenshaw3jCMfl0HM', '129rdade3kl85qFy', '130amarwood3lVLpX2U0', '131cascroft3msZOSSiM4', '132disaksson3nGkE46LomgDaq', '133jbendik3ovRjJ3Xo7', '134nmayman3pRxHLqB', '135jmadden3qSdgA80GT', '136omacloughlin3rOeaF2lT9v', '137smcnuff3sbBaIbjHjEpZD', '138jdesorts3t1kXQLhYt', '139wjanicijevic3urk6aH2lIQh4W', '140djacobsson3vHcltqqt0', '141bborgars3woPbOTZ9', '142mmcaughtry3xIZqtW0nEyf', '143lpadly3yamy8rKmTuxYy', '144sskullet3zWkO6WDA', '145apawelczyk40tiYwzF83', '146hhansill41Uo1z1V', '147afleote42Q3E6P13', '148bkluger43YvTS3RMpK', '149seveque44pUY608aMD', '150awitherow45HB6fnU', '151ccarlow46f7IqRfkw', '152sgillooly47bWtzTv1xsw3O', '153jfitzackerley48vDdtaNX', '154sshepperd49bdcpmJKQiD3', '155ctracey4aNEoVQHiBc6i', '156ladshead4bDdnDhH', '157fashborn4cEDNUUCVt', '158jbenard4deaZkAEIHDF', '159bmelmar4eTkfYwO', '160ldewire4f6HMvNzbL', '161cyoslowitz4g0k1LQ2arUc', '162jmclae4hFLaEEkSYkvqI', '163mlemasney4iLCNjkEp5X7jJ', '164lsnartt4jFzOz6Vnpkd', '165wmayman4khfb9CN44J', '166mkirkham4l2bLyD8jr', '167mpiecha4mp7QaxOD', '168bloody4n9wlMpznN', '169ebusson4oU1AHXX', '170cepiscopi4pcKWVE5', '171asherrum4qa9W4H2YsZk', '172mgrutchfield4rOe7zwmhyClpn', '173tlightbourne4s0q0R7EnYRE3', '174iinglefield4tMIKj9H93e1s', '175mchaplyn4uS5KkW1B', '176amurden4vc0PNupcGu', '177lpidgeon4wPaZqlAvi', '178rjowle4xrxFsIdh6GKLq', '179bgarrattley4yG4St8E5v1cN', '180lmarkwelley4zREuK81Vpz92', '181adurtnal50uWwqPGELO', '182lbenedito51Ay5glgfno', '183vglantz52pR3s6aa2', '184cdadamo53VrkpZITnH', '185emcphate54CT3904xv', '186gblackader5582tJkiDk', '187lgilfoyle56DpJZ2U', '188jmcglone57DD8Eo3EKC', '189sbumford58PWxLkwGW9I', '190amabbett591QZnwA4', '191ctunnow5atLElLx', '192mclemetts5b9O150mP2E', '193ddisdel5cjMQV9z2', '194lismead5d1huG9TQQg', '195ptuberfield5ejBMSBQ', '196akenford5fQBRtWLyLz', '197rblandamere5gFABajeh', '198kfritschel5hwIHatfeg', '199cvossgen5iUcoendjB', '200amarchant5jNkB2ao', '201hjurges5kutW5VJDSrJx', '202mhanburybrown5loiEXV3', '203clexa5mlIhZq1yrYTW', '204ovenners5nMpqnhJ1w', '205dshowers5oFE8DtIG1Jf', '206acureton5ph2lI95mvxqL', '207ecisson5qtg4Lnbt7mk', '208esixsmith5rEldzPQ4', '209tguinnane5s3Zor6l', '210ggrindell5tA25xxI0X', '211mbertin5uHWWgcZe', '212tdurtnall5vsEfvBOmd8', '213tgogarty5wfN1hk5vvP6', '214anendick5xQDsyddA', '215krea5yQfXcppsZsor', '216ghoggins5zKJw25Th', '217vnother60osVmBa', '218tmaidment61U3dhHb', '219ogoodger62FEbXKw6', '220bdomleo63RNXhOq', '221ucosgriff64lyWjC6hj7', '222gkernaghan65TKLRy15', '223jfordyce666yfFiaO4', '224sgoodsell67LPABWo', '225shicken682SpmpBoMKg', '226fguesford69SOhIxWru', '227zkirkam6aFRY7crkADAzb', '228snappin6bzM51Fchyw', '229gwhitehorne6cmxFMHuo', '230fcrayton6dc2KaB469', '231blanaway6eBi39ho', '232cyewdall6fcjVZ2IJ', '233ttemple6gCLXpBDLQ', '234arogger6hFnK2BBz', '235cprene6iAsH8bI1', '236lrudd6jR9Gea6oO', '237ckench6kpTdswrtBXC', '238crudyard6lyuRAaL', '239hgrayston6mg9BsvNBx', '240yduffyn6nYP8qbSt', '241mclackers6oTjJtuB30Y', '242ffley6pVu9FUQhu0dZi', '243igodfree6q4f6CVoDL', '244pisakovic6rfaLCtb', '245ajendricke6sPUZJPgO', '246rpoulglais6trTRQA8Y', '247inawton6u3Lsi7DgCE', '248asteanyng6vCa7q3R', '249kdesborough6wayw1x2Sfj', '250dconklin6xQhwtYZOZyBAk', '251btrinkwon6yGqaaQW7wRI', '252shamelyn6zBG6CnScu', '253mnapper708CHbHuRbl', '254sschohier712q0yyL', '255xdugue725FqTWm7', '256brawlence73wndwCqXmp9L', '257mord74hZ7pmI3xqw', '258nbrackpool75s3XNhv7OvtHa', '259lgiamelli76gKavveFdOSw', '260maspey77N8aLqAYdd', '261rvescovo78qIp00Bvy5V', '262jwhitsun79xfOXOV3rQtrJ', '263pwhaites7aOGKBaLY', '264agreensall7byCwFq0gG', '265dbinden7cIEXCwId', '266dacomb7dpI7VaD62t0t1', '267slegion7eNQQfPqOL', '268mnacey7fNFACukBIE', '269mdoohey7gCPJ3AWgD6', '270solifard7hji8S2XnX4cys', '271mstutt7iKFkeITOMRW', '272amorstatt7jsvRuyS', '273rwingatt7kleM7EDU3', '274hpolfer7lEOWCqI8Ca', '275bwais7mxnARvh0yH', '276cwolvey7nPGf8v61cj3UR', '277bharnell7oQEq3qZ', '278gkedslie7pN6wtl0n', '279tfairbrother7qQmQcor', '280ddungay7rhaKz8hu', '281aevennett7sQtbtcOOe', '282ggrayley7tvi7mhsyB', '283ddenington7ubwZniP9X3wz', '284iyoodall7vcKWHUohM3R', '285pbilovsky7wdEDgC3MfLDJ2', '286smeneghi7xHGnRg26', '287dpetricek7y3X5NlvT', '288ngraundisson7zNuUHoM0d', '289esoanes80GGwet9VX1dp', '290shighnam81Sy0VZqzl', '291clarcier82ZQ06Mvh8', '292danthoney83PxtNbYFh', '293lfoulds84rbSR1u0', '294rstrawbridge85plJRDNhPD', '295mheckner86p7Sl16vYDz', '296liwanowski87LTpWXmxL', '297abugdale88LNrJ8xPUluK', '298fscrase89MCMsFwb', '299pcrack8abzgG4kvs', '300hlesaunier8bFumUm9MK0cV', '301dsammes8c0ciAD3', '302fcreffeild8dcITPKtb5Umd', '303tpostill8etx0irsZ6bN5W', '304gmatisoff8fPL61gKeN', '305ioliveras8gU4oJ313nbAJ4', '306sscholte8h0VmfYfAaM', '307ktuminelli8iLh7yUEygaS', '308eingilson8jD6LldNeMTWb', '309kfrangione8kIVzoB6', '310aboxell8lyppUZhc3cW', '311rcoughtrey8mkATPsyzq8UIo', '312jbyfford8nkU7JvlKf', '313fcovolini8oTFlGAuq', '314ngabbatt8pQHeRd9', '315erickett8q4VuX5D6oa5', '316jruppeli8rr6Ih2xBN2Ko', '317lcobleigh8s07iAN1akj', '318wschechter8thWDrXgp9Z', '319jbailes8umBIhSgONRBp', '320bpennini8vAZNkxSiq2', '321pdevil8wiICNMW7rZ', '322jtuffley8xYaZ4kIHqkbjz', '323sacland8ypfxGj7K', '324hhacking8zdHral2GiG', '325dfeeley90eLgFkeUStWq', '326lvosper91UKAqIcn1M', '327ebolesworth925ZGN2Eq', '328lhauch93OKZZwBNphCd', '329dmacgruer94SBtN5NVqGmZb', '330dveltmann95T5Rg0R0jb', '331nbrailsford96L1djxTL', '332dwoolard97zFmfjPVXqj9', '333sbrownhill98AKDxrOy', '334rcham998EmnsH', '335rchiechio9az39wwcIu2yJz', '336hcarver9bcP9CMrGHy0', '337breiner9cXbXDRBeYl', '338pclemmensen9d8A6KzUYHuWqE', '340bcursons9ft9rtstIZht', '341gforcade9gTskXU0S6ev', '342elawrance9hsVezDy5OBPAU', '343wmantripp9ib9ZN699FfE2', '344wmellonby9j1FLXcnv', '345eitzkov9kLbrXVlo0', '346rbeardwood9lkKlm0e', '347ceyckel9mqrRUIsoi', '348mmash9ntxXx0a', '349esouza9oUsFC7m', '350sbrayson9p52NuCtcFGr7J', '351kcawker9qBQQPoIrYSR', '352ahandy9r2HLNOYV', '353fputtnam9sQxVi5oEj', '354jdehooge9t6j1EN71R', '355jarro9ul7rSX1FQfZV', '356jowtram9vWPkBqK', '357ndadd9wkt0rcA8C', '358fgarley9xMU4kx3WJ', '359jkift9ytTV6Ib2QJT', '360mkime9z64dSxVZu', '361dcorsellesa0a3PVSMt8', '362tburnharda1Z3O5MaxsetdF', '363tszymanowskia287n9Uwgjl1', '364spima35z2bzZmitk', '365ltwitchinga4hWMUg3tPw', '366wsmithiesa5FG0l51iISnG', '367mkilsbya6FOoeUaCioWD', '368pcantophera7UbpGqjMFqL', '369imargerya845spuriOxkf', '370lcurthoysa9bnVGlQWexZ', '371knutteyaaEIGuYKJskFa', '372lphalipabWSd8Gvs', '373werbeac69oyyGKQ8LQ1', '374cskillittadTd5zBzo', '375dphinnaetpFsiidx', '376croafafbR2wLzMDch', '377pcolliardagxuZRn9', '378mpomeryah7ThXb1b', '379mclayfieldaiHfizc5mI8V', '380jegliseajEFfrsv5c1lW', '381mscreenakke1XdFlZS', '382bboweringal4YT0C1Z', '383mtomaszkiewiczamDdRJFukct3', '384dandrzejczakanA9J35NDOrFb', '385msmithermanaotH0W0KfI', '386zbonifaceapty76sQ', '388rbeinckenarchGWj3', '389ysangwinasY0eRAcERmz7T', '390cquinnellyatO6kWVC5YPL', '391slanphereauMAnfSZpc1', '392bwyantavkWqLa0OWd7sp', '393jmckmurrieawFfbhTOgQ', '394cmackaileaxlmDOWTBd', '395jcockremay1oILsbgt', '396laasafaztVZ0h7Ns9', '397rovillb0zDtxqLX', '399aclapstonb2BI2DwViRim', '387mclemenzaaqfeizBEBxsO', '400ehedonb3DVxWMTdNIK', '401ysimcob4N7UHBAT4HE2', '402rvanstoneb5kRnjVR', '403tgoulyb6tgB2x5', '404slattimerb7zcCCZ7Gr8', '405wstokeb8d7pVxDRK7bxJ', '406gdinniesb932FaCRjJg', '407mkenchbaYOdl0m1', '408adevinnbbOUF6CHXY', '409htownrowbcBw8BAP2mOJIu', '410lloghanbdmsUoAzUH0', '411clovemanbebRmv8T', '412bvearnalsbfw0UiOTkBTw', '413dhixleybgwmKeHtO8OO', '414cimlochbhHuW8W9Z', '415bgeffcockbi7QthFj', '416adurtnellbjUT47ExwdCRX8', '417srosanderbkh04UUWE093u', '418lcrocroftblM4MNn2iAq0', '420criccellibnEfixgjn', '421celldredboaJ4t3M', '422krizzardinibpPj4wPk', '423pellsbqSgqtm73CHU', '424abramhambrE6OLWQUCen7K', '425jkingerbybs0F5C9M', '426jtebbebtOWkDVqZRyCu', '427wdunsmuirbudEjVL3R', '428akantorbvtTC9HYaNC', '429edishmonbwIqxix8nH', '430hflorencebx0TsJpkfy8y', '431spalombabyzDczBzF', '432carmytagebzkr255lt', '433vroscampsc0q1FO4upZ', '434jenockssonc1HQROjfRK', '435adiglinc2WqQvZkky1', '436aoleaghamc3yFzvgZxcU8E', '437ustpierrec4QgdOkw', '438wriccioppoc5iNCAIp2kHWW', '439gcopperwaitec6PN8Tl1Y', '440dfairallc7QXVSAbxs8V', '441atrinemanc8Nc4DbaXPdLJ', '442liapicoc9jVoyQxIU', '443ppetrushankocaLhBZk7yxQ', '444jchsteneycbyhiQPBv', '445ndebullionccIxHaCpq', '446qsissonscdDsLEKvAAd', '447kdoxseyceieY7tkz', '448kgersoncf5NASx3ruH', '449hcransoncgUDmb1H3h', '450nloffillchITN4FJHCnRk', '451lgawenciKof6ErV', '452cmewrcikcjdHFn1tCD9', '453baddsckWQ48WW2OcY', '454jsarfassclnEf3jSij', '455jphoenixcmgHu5X0i', '456pbernetcnWGiCd2SgY', '457mchuckco7DVohpxN5yd', '458aridelcpiokVQVCmm', '459dgashcqVjEtERl', '460bpizercr2VuIU90', '461cswiffincsTlqtsga', '462bghiottoctrZaWuTvYhX', '463rgoltoncuIRzlo5cKvx', '464jtammadgecvaRdQWKz2hCR', '465kemettcwNSM4u0', '466fburnelcxDBeebedQ5', '467bwilkscyEwZSvcM', '468meshczY88b60s', '469foconcannond0VyQ0EqJ92', '470hcaselyd1590qB8E4tE', '471drigardd2vjaY990', '472ashorthoused3HOwu7E0I', '473mhaythd480doWB5t', '474pjaillerd54p1O7wmlKuOI', '475ihortopd6rgIK7Qqzgc', '476aheyburnd75rfcqf', '477cmineghellid8Ysd4JFLLvn5e', '478ademetzd9Noaks5', '479jinksterdaL3HeGfmfC71x', '480vcaslindb6IfgE8pIf', '481ccrossgrovedcfBw4aE89ZX', '482slahrsddnupWL9', '483fgravedesjC6MlnJb2', '484pmatchelldfOJrrPb', '485tbelliedgwMZ95XZI9V', '486klahertydhhKHeSFRSp', '487valfwydiTzay9leQvUcW', '488khenrychdjbWNwGN67', '489sjeavesdkOIryF6Y5', '490jpharedlUnT1wLg4zt', '491djelldmxdmtJUtxfHgJ', '492hgaylarddnks7Iblf', '493jhearsondohvq0jsg', '494adufouredpVybfw5A6z', '495ndudindq3WsBRVcD', '496jportmandr4dC9kxVj', '497schristoffedsmqzUCamQu', '498asparkwelldt9eX3RpsDzU6O', '499upaddeleydunavZIsPoLRLw', '500gbonafacinodv8W3jstgo8', '339ctuer9etkXQQLRGvN', '419fdarrellbmYWfNoMMyFoNL', '398hjouhanb1UwvH6guLlcPR', 'auth0|617264a3ff86f6006a3c4bdc', 'auth0|6172e93b33f69200704cd3fa', 'auth0|617318521e38d9006862cd77', 'auth0|6173189306721e0069119fdb', 'auth0|61731aa4cac37f00684d6366', 'auth0|61731bc6cac37f00684d63fa', 'auth0|61722dfd02b3dd0071cc87a0', 'auth0|61725eacfe39bb0069280d94', 'auth0|6173289733f69200704cef3b', 'auth0|6171c22c06721e0069112c55', 'auth0|617338d1c69eb2007053434d', 'auth0|61732a39ff86f6006a3c96ee',
];

const random0toN = (n) => (Math.floor(Math.random() * (n + 1)));
const random1toN = (n) => (Math.floor(Math.random() * (n)) + 1);
const randomDate = () => {
  const year = Math.floor(Math.random() * (2021 - 2018) + 2018);
  const month = random1toN(60);
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = random1toN(60);
  const minSec = random1toN(60);

  return new Date(year, month, day, hour, minSec, minSec).toISOString();
};
const dateOrdered = () => {
  const day = Math.floor(Math.random() * (23 - 18) + 18);
  const hour = random1toN(60);
  const minSec = random1toN(60);

  return new Date(2021, 8, day, hour, minSec, minSec).toISOString();
};
const dateExpectedNow = () => {
  const day = Math.floor(Math.random() * (29 - 25) + 25);
  const hour = random1toN(60);
  const minSec = random1toN(60);

  return new Date(2021, 8, day, hour, minSec, minSec).toISOString();
};
const dateExpectedFuture = () => new Date(2050, random1toN(12), random1toN(28), 5, 5, 5).toISOString();
const randomAuthId = () => authIds[random0toN(500)];

const status = () => {
  let str = 'id,text,created_at,auth_id\n';

  const words = ['apples', 'fruits', 'milk', 'carbs', 'ice-cream', 'vegitables', 'lettuce', 'corn', 'healthy', 'something'];
  const sentence = [
    `I need to start eating more ${words[random0toN(9)]}`,
    `Doing really well with my ${words[random0toN(9)]}`,
    `${words[random0toN(9)]} really saved my life`,
    `Need to get more ${words[random0toN(9)]} soon`,
    'Feeling Great',
    'Got it done today',
    `Eventually ${words[random0toN(9)]} will save my life`,
    'Loving the skin im in',
    'Went for a jog today',
    'I have to remember to get more crickets',
  ];

  const randomText = () => sentence[random0toN(9)];
  for (let i = 0; i < 1000; i += 1) {
    str += `${i + 1},${randomText()},${randomDate()},${randomAuthId()}\n`;
  }

  return str;
};

const userMeals = () => {
  let str = 'id,date_ordered,date_received,meal_id,auth_id\n';

  for (let i = 0; i < 1000; i += 1) {
    if (i % 6 === 0) {
      str += `${i + 1},${dateOrdered()},${dateExpectedFuture()},${random1toN(9)},${randomAuthId()}\n`;
    } else if (i % 9 === 0) {
      str += `${i + 1},${dateOrdered()},${dateExpectedFuture()},${random1toN(9)},${randomAuthId()}\n`;
    } else {
      str += `${i + 1},${dateOrdered()},${dateExpectedNow()},${random1toN(9)},${randomAuthId()}\n`;
    }
  }


  return str;
};

const userProducts = () => {
  let str = 'id,date_ordered,date_received,product_id,auth_id\n';

  for (let i = 0; i < 1000; i += 1) {
    if (i % 38 === 0) {
      str += `${i + 1},${dateOrdered()},${dateExpectedFuture()},${random1toN(61)},${randomAuthId()}\n`;
    } else {
      str += `${i + 1},${dateOrdered()},${dateExpectedNow()},${random1toN(61)},${randomAuthId()}\n`;
    }
  }

  return str;
};

console.log(userProducts());
