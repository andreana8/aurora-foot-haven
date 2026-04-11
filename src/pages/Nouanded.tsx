import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Nouanded = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
          >
            ← Tagasi
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jalgade eest hoolitsemine
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Nõuanded ja kasulikud nipid tervete jalgade heaks
          </p>

          {/* Sissekasvanud varbaküüs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Sissekasvanud varbaküüs: põhjused, sümptomid ja ennetamine
            </h2>
            <p className="text-muted-foreground mb-6">
              Sissekasvanud <strong>varbaküüs</strong> on ebameeldiv ja sageli valulik seisund, mille puhul küüne serv või nurk kasvab varvast ümbritsevasse koesse. See põhjustab punetust, turset ja valu, eriti suurel varbal, kuid võib esineda ka teistel varvastel.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Valesti lõigatud varbaküüned</strong> – Küünte liiga lühikeseks või nurgeliseks lõikamine võib viia küüne serva sissekasvamiseni.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Liiga kitsaste jalanõude kandmine</strong> – Kitsad või kõrge kontsaga jalanõud avaldavad varvastele survet ja soodustavad sissekasvamist.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Trauma ja vigastused</strong> – Jalgade vigastused, näiteks löögid või raskete esemete kukkumine varvastele, võivad põhjustada küünte deformatsiooni.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Geneetiline eelsoodumus</strong> – Mõndadel inimestel on selline küüne struktuur, mis muudab sissekasvamise tõenäolisemaks.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Seeninfektsioonid</strong> – Küünte seeninfektsioonid põhjustavad küüneplaadi paksenemist ja deformatsiooni, suurendades sissekasvamise riski.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Diabeet</strong> – Diabeedi korral on suurem risk sissekasvanud küünte tekkeks, sest haigus mõjutab jalgade vereringet ja naha tervist.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Sissekasvanud küüne sümptomid:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Punetus ja turse
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Valu ja tundlikkus
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Mõningatel juhtudel võib esineda mädane eritis
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Põletiku süvenemine võib muuta kõndimise valulikuks
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Raskematel juhtudel küüne värvi ja kuju muutumine ning küüneplaadi kihistumine
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Kuidas ennetada sissekasvanud varbaküünt?</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Küünte korrektne lõikamine.</strong> Lõigake varbaküüned sirgelt, vältides liiga lühikeseks lõikamist ja nurkade ümardamist.
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Mugavad jalanõud.</strong> Kandke jalanõusid, mis ei avalda varvastele liigset survet, ja vältige kitsaid kingi.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Jalgade hooldus.</strong> Jalgade igapäevane kontrollimine ja õigeaegne hooldus aitab ära hoida probleeme varbaküüntega. Kui küüned kipuvad sisse kasvama, kaaluge regulaarselt jalahooldusspetsialisti külastamist.
            </p>

            <h3 className="text-xl font-bold mb-3">Millal pöörduda spetsialisti poole?</h3>
            <p className="text-muted-foreground">
              Kui kodused meetodid ei aita ja sümptomid süvenevad, on oluline pöörduda arsti poole. Mädase põletiku korral on vajalik professionaalne sekkumine. Sissekasvanud küüne varajane ravi aitab vältida kirurgilist sekkumist ja vähendab tüsistuste riski. Tõsisematel juhtudel võib osutuda vajalikuks küüne osaline või täielik eemaldamine.
            </p>
            <p className="text-muted-foreground mt-4">
              Sissekasvanud varbaküüs on sage probleem, mida on võimalik ennetada korraliku jalahoolduse ja õige jalanõude valikuga. Kui probleem siiski tekib, on oluline tegutseda varakult ja pöörduda vajadusel spetsialisti poole, et vältida suuremaid tüsistusi.
            </p>
          </section>

          <hr className="border-border mb-12" />

          {/* Kannalõhed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Kannalõhed: tekke põhjused, märgid ja kuidas hooldada
            </h2>
            <p className="text-muted-foreground mb-4">
              Kannalõhed on tavaline ja ebameeldiv probleem, mis tekib tihti naha kuivamise tõttu.
            </p>
            <p className="text-muted-foreground mb-4">
              Kui nahk muutub kõvaks ja hakkab sügelema, võivad tekkida valulikud lõhed. Lisaks kuivusele võivad kannalõhed olla põhjustatud ka hõõrdumisest, liigsest higistamisest või seeninfektsioonidest. Kui neid ei ravita, võivad need süveneda, põhjustades paksendeid, valu ja isegi veritsust.
            </p>
            <p className="text-muted-foreground mb-6">
              Kannad on eriti vastuvõtlikud kuivamisele, kuna neil on pidev kokkupuude maapinnaga ja nad kannavad kogu keha raskust. Eriti tähelepanelik tuleks olla siis, kui töötad pikalt püsti seistes või kannad halvasti hingavaid jalanõusid. Tähtis on jalgadel hingata lasta, mis tähendab, et kodus oleks hea kanda avatud jalatseid või liikuda paljajalu.
            </p>

            <h3 className="text-xl font-bold mb-3">Toitumise ja vedeliku tarbimise olulisus naha tervisele</h3>
            <p className="text-muted-foreground mb-6">
              Naha tervis sõltub suuresti ka toitumisest ja piisavast vedeliku tarbimisest. Kindlasti tasub iga päev juua piisavalt vett, umbes 15–30 milliliitrit kehakaalu kilogrammi kohta. Lisaks võiks kaaluda toidulisandite võtmist, mis sisaldavad nahale kasulikke vitamiine ja antioksüdante, nagu A-, E- ja C-vitamiinid, samuti oomega-3 ja oomega-6 rasvhappeid.
            </p>

            <h3 className="text-xl font-bold mb-3">Tõhus abinõu kuivade kandade vastu</h3>
            <p className="text-muted-foreground mb-4">
              Uureat sisaldavad kreemid on suurepärane vahend kuivade ja lõhenenud kandade hooldamiseks. Kergemate kuivusprobleemide korral piisab 5–10% uureat sisaldavast kreemist, kuid raskematel juhtudel, kui kannad on juba karedad ja kõvad, tuleks eelistada suurema, 30–50% uureasisaldusega kreemi. Uurea aitab nahka sügavalt niisutada ja ennetada lõhede süvenemist.
            </p>
            <p className="text-muted-foreground mb-6">
              Lisaks niisutamisele on oluline regulaarselt jalgu pesta, eelistatavalt seebivabade puhastusvahenditega, mis ei kuivata nahka. Kuivata jalad hoolikalt ja kreemita neid igal õhtul pehmendavate ja niisutavate jalakreemidega, mis sisaldavad näiteks uureat, sheavõid, mentooli, hobukastanit, proteaasi, allantoiini ja teisi toimeaineid.
            </p>

            <h3 className="text-xl font-bold mb-3">Millal tuleks pöörduda spetsialisti poole?</h3>
            <p className="text-muted-foreground">
              Kui kodused hooldusvahendid ei anna soovitud tulemusi või infektsioon süveneb, on soovitatav pöörduda spetsialisti poole. Apteekrid ja jalahoolduse spetsialistid oskavad nõustada parimate toodete ja ravivõimaluste osas. Kui aga käsimüügi tooted ei aita, võib vaja minna podoloogi abi.
            </p>
          </section>

          <hr className="border-border mb-12" />

          {/* Jalaseen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Jalaseen: põhjused, sümptomid ja ennetamine
            </h2>

            <h3 className="text-xl font-bold mb-3">Jalaseene tekkepõhjused ja selle ennetamine</h3>
            <p className="text-muted-foreground mb-6">
              Jalaseene tekkeks on mitmeid põhjuseid, mis võivad soodustada seeninfektsiooni. Enamik inimesi puutub sellega elu jooksul kokku, kuid õnneks saab selle teket ennetada, kui mõista riskitegureid ja võtta õigeaegselt kasutusele vajalikud meetmed.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Liigne higistamine</strong> – kui jalad higistavad, on niisked ja ei saa piisavalt õhku, muutub keskkond seeninfektsiooni tekkeks soodsaks.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Ebapiisav jalgade kuivatamine pärast pesemist või ujumist</strong> – niiskus jalgadel on ideaalne kasvupinnas seeninfektsioonidele.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Kitsaste jalanõude kandmine</strong> – jalad on survestatud, ei saa hingata, niiskus koguneb jalanõudesse ning aitab kaasa küünetraumade ja seenhaiguste tekkele.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Paljajalu kõndimine ühiskasutatavates kohtades</strong> – spordisaalid, basseinid ja spaad on kohad, kus seeninfektsioonid sageli levivad.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Levinud jalaseene sümptomid:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Nahk hakkab punetama ja ketendama
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Sügelus ja põletustunne
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Villide teke ja ebameeldiv lõhn
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                Kui infektsiooni ei ravita, võib see levida varbaküüntele, põhjustades nende paksenemist, haprust ja värvimuutust.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Kuidas ennetada jalaseene tekkimist?</h3>
            <p className="text-muted-foreground mb-6">
              Hea jalgade hügieeni säilitamine on jalaseene ennetamise esimene samm: igapäevane pesemine ja põhjalik kuivatamine. Jalgade niiskeks jätmine soodustab seeninfektsiooni teket. Kandke hingavaid jalanõusid. Valige materjalid, mis lasevad õhku läbi, ja vältige kitsaid kingi. Parim on vahetada jalatseid regulaarselt, et need saaksid kuivada. Hoidke jalad kuivad. Kui teie jalad kipuvad higistama, kaaluge spetsiaalsete jalapulbrite kasutamist, mis hoiavad nahka kuivana ja vähendavad seeninfektsioonide tekkimise võimalust.
            </p>

            <h3 className="text-xl font-bold mb-3">Kodused abinõud jalaseene raviks</h3>
            <p className="text-muted-foreground mb-4">
              Kui jalaseen on juba tekkinud, saab selle vastu kasutada mitmeid koduseid vahendeid:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Teepuuõli ja küüslauk</strong> – need looduslikud koostisosad omavad seenevastaseid omadusi ja on olnud kasutusel sajandeid.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Meresoolavann</strong> – jalgade leotamine soojas vees koos meresoolaga, võib aidata leevendada sümptomeid.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span><strong>Eeterlikud õlid</strong> – lavendel, piparmünt ja eukalüpt on tuntud oma seenevastaste ja antibakteriaalsete omaduste poolest.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Millal tuleks pöörduda jalahoolduse spetsialisti poole?</h3>
            <p className="text-muted-foreground">
              Kui kodused ravivõtted ei anna tulemusi või infektsioon süveneb, on oluline pöörduda tervishoiutöötaja poole. Jalaseen ja küüneseen on levinud mured, mida ei ole põhjust häbeneda – spetsialistid saavad sind aidata sobiva ravi määramisega.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nouanded;
