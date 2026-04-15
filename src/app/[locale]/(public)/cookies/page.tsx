/** src/app/[locale]/(public)/cookies/page.tsx */

import LegalPage, {
    LegalList,
    LegalSection,
} from "@/features/legal/components/LegalPage";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "legal" });

    return {
        title: t("cookiesTitle"),
        alternates: {
            canonical: `${siteUrl}/${locale}/cookies`,
            languages: buildLanguageAlternates("cookies"),
        },
        robots: { index: false },
    };
}

export default function CookiesPage() {
    return (
        <LegalPage titleKey="legal.cookiesTitle" updatedKey="legal.cookiesUpdated">
            <LegalSection title="1. O que são Cookies?">
                <p>
                    Cookies são pequenos ficheiros de texto armazenados no seu dispositivo
                    (computador, telemóvel ou tablet) quando visita um website. Permitem que
                    o site reconheça o seu dispositivo em visitas futuras e guardem preferências
                    e informações de sessão.
                </p>
                <p>
                    Os cookies não contêm vírus nem programas maliciosos e não acedem a
                    informações pessoais do seu dispositivo além das que o próprio website
                    armazena.
                </p>
            </LegalSection>

            <LegalSection title="2. Cookies que Utilizamos">
                <p>
                    Este website utiliza apenas cookies estritamente necessários ao seu
                    funcionamento. Não utilizamos cookies de rastreamento, publicidade
                    comportamental ou partilha em redes sociais de terceiros.
                </p>

                <div className="flex flex-col gap-4 mt-2">
                    <div className="rounded-sm border border-border p-5 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                Cookies Essenciais
                            </span>
                            <span className="text-xs bg-foreground text-white px-2 py-0.5 rounded-sm">
                                Sempre ativos
                            </span>
                        </div>
                        <p>
                            Necessários para o funcionamento básico do website. Incluem
                            cookies de sessão e de segurança que permitem navegar e utilizar
                            as funcionalidades do site. Não podem ser desativados.
                        </p>
                        <LegalList
                            items={[
                                "Cookies de sessão — expiram quando fecha o browser",
                                "Cookies de preferências de idioma — conservados por 30 dias",
                            ]}
                        />
                    </div>

                    <div className="rounded-sm border border-border p-5 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                Cookies Analíticos
                            </span>
                            <span className="text-xs border border-border text-muted px-2 py-0.5 rounded-sm">
                                Opcionais
                            </span>
                        </div>
                        <p>
                            Permitem compreender como os visitantes interagem com o website,
                            recolhendo e reportando informação de forma anónima e agregada.
                            Ajudam a melhorar a experiência de navegação. Apenas ativados
                            com o seu consentimento.
                        </p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection title="3. Como Gerir os Cookies">
                <p>
                    Pode controlar e gerir os cookies através das definições do seu browser.
                    A maioria dos browsers permite bloquear ou eliminar cookies, mas tenha
                    em conta que desativar cookies essenciais pode afetar o funcionamento
                    do website.
                </p>
                <p>Instruções para os principais browsers:</p>
                <LegalList
                    items={[
                        "Google Chrome — Definições › Privacidade e segurança › Cookies",
                        "Mozilla Firefox — Definições › Privacidade e segurança",
                        "Safari — Preferências › Privacidade",
                        "Microsoft Edge — Definições › Cookies e permissões do site",
                    ]}
                />
                <p>
                    Também pode optar por não ser rastreado ativando a opção{" "}
                    <em>Do Not Track</em> nas definições do seu browser.
                </p>
            </LegalSection>

            <LegalSection title="4. Cookies de Terceiros">
                <p>
                    Este website pode incluir conteúdos ou funcionalidades de terceiros
                    (como mapas ou formulários de serviços integrados) que podem instalar
                    os seus próprios cookies. Não controlamos esses cookies e recomendamos
                    que consulte as respetivas políticas de privacidade.
                </p>
            </LegalSection>

            <LegalSection title="5. Consentimento e Revogação">
                <p>
                    Ao utilizar este website, considera-se informado sobre a utilização de
                    cookies essenciais, que não carecem de consentimento por serem
                    tecnicamente necessários.
                </p>
                <p>
                    Para cookies opcionais, o seu consentimento é solicitado de forma
                    explícita e pode ser revogado a qualquer momento eliminando os cookies
                    armazenados nas definições do browser ou contactando-nos em{" "}
                    <a
                        href="mailto:geral@chanilaicastro.pt"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        geral@chanilaicastro.pt
                    </a>
                    .
                </p>
            </LegalSection>

            <LegalSection title="6. Mais Informação">
                <p>
                    Para mais informações sobre como tratamos os seus dados pessoais, consulte
                    a nossa{" "}
                    <a
                        href="/privacidade"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        Política de Privacidade
                    </a>
                    . Para questões sobre cookies, contacte{" "}
                    <a
                        href="mailto:geral@chanilaicastro.pt"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        geral@chanilaicastro.pt
                    </a>
                    .
                </p>
            </LegalSection>
        </LegalPage>
    );
}
