/** src/app/[locale]/(public)/privacidade/page.tsx */

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
        title: t("privacyTitle"),
        alternates: {
            canonical: `${siteUrl}/${locale}/privacidade`,
            languages: buildLanguageAlternates("privacidade"),
        },
        robots: { index: false },
    };
}

export default function PrivacidadePage() {
    return (
        <LegalPage titleKey="legal.privacyTitle" updatedKey="legal.privacyUpdated">
            <LegalSection title="1. Responsável pelo Tratamento">
                <p>
                    O responsável pelo tratamento dos seus dados pessoais é{" "}
                    <strong className="text-foreground">Chanilai Castro</strong>,
                    consultora imobiliária a operar sob a marca Keller Williams — KW Lead,
                    com sede em Portugal.
                </p>
                <p>
                    Para qualquer questão relacionada com a proteção dos seus dados pessoais,
                    pode contactar-nos através do endereço{" "}
                    <a
                        href="mailto:geral@chanilaicastro.pt"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        geral@chanilaicastro.pt
                    </a>.
                </p>
            </LegalSection>

            <LegalSection title="2. Dados Recolhidos e Finalidades">
                <p>
                    Recolhemos apenas os dados pessoais necessários para responder aos seus pedidos
                    de contacto e prestar o serviço de consultoria imobiliária. As categorias de
                    dados tratados incluem:
                </p>
                <LegalList
                    items={[
                        "Dados de identificação: nome completo",
                        "Dados de contacto: endereço de email e número de telefone",
                        "Informação fornecida voluntariamente no formulário de contacto (assunto e mensagem)",
                        "Dados de navegação recolhidos automaticamente (endereço IP, tipo de browser, páginas visitadas) para fins estatísticos e de segurança",
                    ]}
                />
                <p>
                    Os dados recolhidos através do formulário de contacto são utilizados
                    exclusivamente para responder ao seu pedido e, caso aplicável, para
                    estabelecer uma relação de prestação de serviços.
                </p>
            </LegalSection>

            <LegalSection title="3. Base Legal do Tratamento">
                <p>
                    O tratamento dos seus dados pessoais assenta nas seguintes bases legais,
                    previstas no Regulamento Geral sobre a Proteção de Dados (RGPD):
                </p>
                <LegalList
                    items={[
                        "Consentimento (art.º 6.º, n.º 1, al. a) RGPD) — quando preenche o formulário de contacto e nos autoriza expressamente a tratar os seus dados",
                        "Execução de contrato ou diligências pré-contratuais (art.º 6.º, n.º 1, al. b) RGPD) — quando o tratamento é necessário para prestar o serviço solicitado",
                        "Interesse legítimo (art.º 6.º, n.º 1, al. f) RGPD) — para fins de segurança e análise estatística anónima do website",
                    ]}
                />
            </LegalSection>

            <LegalSection title="4. Conservação dos Dados">
                <p>
                    Os seus dados pessoais são conservados apenas pelo período necessário às
                    finalidades para que foram recolhidos:
                </p>
                <LegalList
                    items={[
                        "Dados de contacto recolhidos via formulário: conservados durante o período da relação de prestação de serviços e, após o seu término, pelo prazo legalmente exigido (até 5 anos para fins contabilísticos e fiscais)",
                        "Dados de navegação: conservados pelo período mínimo necessário, não superior a 12 meses",
                        "Se não for estabelecida qualquer relação de serviço após o contacto inicial: os dados serão eliminados no prazo de 6 meses",
                    ]}
                />
            </LegalSection>

            <LegalSection title="5. Partilha de Dados com Terceiros">
                <p>
                    Os seus dados pessoais não são vendidos, cedidos ou partilhados com
                    terceiros para fins comerciais. Podem, no entanto, ser partilhados com:
                </p>
                <LegalList
                    items={[
                        "Prestadores de serviços tecnológicos (hosting, email) que atuam como subcontratantes e estão vinculados por contratos de tratamento de dados conformes com o RGPD",
                        "Entidades públicas, quando exigido por lei ou por ordem de autoridade competente",
                    ]}
                />
            </LegalSection>

            <LegalSection title="6. Os Seus Direitos">
                <p>
                    Ao abrigo do RGPD, assiste-lhe o direito de, a qualquer momento e de forma
                    gratuita:
                </p>
                <LegalList
                    items={[
                        "Aceder aos dados pessoais que tratamos sobre si",
                        "Solicitar a retificação de dados incorretos ou incompletos",
                        "Solicitar o apagamento dos seus dados ('direito ao esquecimento')",
                        "Opor-se ao tratamento ou solicitar a sua limitação",
                        "Solicitar a portabilidade dos seus dados",
                        "Retirar o consentimento a qualquer momento, sem prejuízo da licitude do tratamento anterior",
                    ]}
                />
                <p>
                    Para exercer qualquer destes direitos, contacte-nos por email para{" "}
                    <a
                        href="mailto:geral@chanilaicastro.pt"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        geral@chanilaicastro.pt
                    </a>
                    , identificando-se e indicando o direito que pretende exercer. Responderemos
                    no prazo máximo de 30 dias.
                </p>
            </LegalSection>

            <LegalSection title="7. Direito de Reclamação">
                <p>
                    Tem o direito de apresentar reclamação à autoridade de controlo competente
                    em Portugal, a{" "}
                    <strong className="text-foreground">
                        Comissão Nacional de Proteção de Dados (CNPD)
                    </strong>
                    , através do website{" "}
                    <a
                        href="https://www.cnpd.pt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        www.cnpd.pt
                    </a>
                    .
                </p>
            </LegalSection>

            <LegalSection title="8. Segurança">
                <p>
                    Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados
                    pessoais contra acesso não autorizado, perda, destruição ou divulgação
                    indevida, em conformidade com o estado da arte e os requisitos legais aplicáveis.
                </p>
            </LegalSection>

            <LegalSection title="9. Alterações a esta Política">
                <p>
                    Esta política pode ser atualizada periodicamente para refletir alterações
                    legislativas, de práticas internas ou de serviços. A versão atualizada
                    será sempre publicada nesta página com a respetiva data de revisão.
                    Recomendamos que a consulte regularmente.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
