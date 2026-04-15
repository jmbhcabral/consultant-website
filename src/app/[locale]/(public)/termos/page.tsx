/** src/app/[locale]/(public)/termos/page.tsx */

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
        title: t("termsTitle"),
        alternates: {
            canonical: `${siteUrl}/${locale}/termos`,
            languages: buildLanguageAlternates("termos"),
        },
        robots: { index: false },
    };
}

export default function TermosPage() {
    return (
        <LegalPage titleKey="legal.termsTitle" updatedKey="legal.termsUpdated">
            <LegalSection title="1. Identificação">
                <p>
                    Este website é operado por <strong className="text-foreground">Chanilai Castro</strong>,
                    consultora imobiliária inscrita na Associação dos Profissionais e Empresas
                    de Mediação Imobiliária de Portugal (APEMIP), a exercer atividade sob a
                    marca <strong className="text-foreground">KW Lead — Keller Williams</strong>,
                    com sede em Portugal.
                </p>
                <p>
                    Contacto: <a href="mailto:geral@chanilaicastro.pt" className="text-foreground underline underline-offset-4 hover:opacity-70 transition">
                        geral@chanilaicastro.pt
                    </a>
                </p>
            </LegalSection>

            <LegalSection title="2. Objeto e Aceitação">
                <p>
                    Os presentes Termos e Condições regulam o acesso e a utilização do website
                    <strong className="text-foreground"> chanilaicastro.pt</strong> e de todos
                    os seus conteúdos e funcionalidades.
                </p>
                <p>
                    Ao aceder a este website, o utilizador declara ter lido, compreendido e
                    aceite integralmente os presentes termos. Caso não concorde com os mesmos,
                    deverá abster-se de utilizar o website.
                </p>
            </LegalSection>

            <LegalSection title="3. Natureza Informativa dos Conteúdos">
                <p>
                    As informações disponibilizadas neste website têm caráter meramente
                    informativo e não constituem consultoria jurídica, fiscal ou financeira.
                    Em particular:
                </p>
                <LegalList
                    items={[
                        "Os valores de impostos, taxas e encargos apresentados no Guia Imobiliário são indicativos e sujeitos a alteração legislativa — devem sempre ser verificados junto das autoridades competentes ou de advogado",
                        "As simulações e exemplos apresentados não vinculam qualquer entidade bancária ou financeira",
                        "Recomendamos sempre a consulta de um advogado ou solicitador antes de assinar qualquer documento imobiliário",
                    ]}
                />
            </LegalSection>

            <LegalSection title="4. Propriedade Intelectual">
                <p>
                    Todos os conteúdos deste website — incluindo textos, imagens, logótipos,
                    design e código — são propriedade de Chanilai Castro ou de terceiros que
                    cederam licença para a sua utilização, e estão protegidos pela legislação
                    aplicável em matéria de direitos de autor e propriedade intelectual.
                </p>
                <p>
                    É expressamente proibida a reprodução, distribuição, modificação ou
                    utilização comercial de qualquer conteúdo sem autorização prévia e por
                    escrito. A marca e logótipo Keller Williams são propriedade da Keller
                    Williams Realty, Inc., utilizados sob licença.
                </p>
            </LegalSection>

            <LegalSection title="5. Limitação de Responsabilidade">
                <p>
                    Chanilai Castro não garante que o website esteja permanentemente disponível
                    ou isento de erros técnicos. Não é responsável por:
                </p>
                <LegalList
                    items={[
                        "Danos resultantes da utilização ou impossibilidade de utilização do website",
                        "Erros, omissões ou inexatidões nos conteúdos informativos",
                        "Conteúdos de websites externos para os quais existam hiperligações",
                        "Interrupções do serviço por motivos técnicos alheios ao seu controlo",
                    ]}
                />
            </LegalSection>

            <LegalSection title="6. Hiperligações para Websites Externos">
                <p>
                    Este website pode conter ligações para websites de terceiros, apresentadas
                    apenas para conveniência do utilizador. Chanilai Castro não exerce qualquer
                    controlo sobre o conteúdo desses websites e não assume responsabilidade
                    pelos mesmos. O acesso a websites externos é feito por conta e risco do
                    utilizador.
                </p>
            </LegalSection>

            <LegalSection title="7. Proteção de Dados Pessoais">
                <p>
                    O tratamento de dados pessoais realizado através deste website rege-se pela
                    nossa{" "}
                    <a
                        href="/privacidade"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        Política de Privacidade
                    </a>
                    , em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD)
                    e demais legislação aplicável.
                </p>
            </LegalSection>

            <LegalSection title="8. Cookies">
                <p>
                    A utilização de cookies neste website é regulada pela nossa{" "}
                    <a
                        href="/cookies"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        Política de Cookies
                    </a>
                    .
                </p>
            </LegalSection>

            <LegalSection title="9. Lei Aplicável e Foro">
                <p>
                    Os presentes Termos e Condições são regidos pela lei portuguesa. Para a
                    resolução de quaisquer litígios emergentes da utilização deste website,
                    as partes elegem o foro da comarca de Lisboa, com expressa renúncia a
                    qualquer outro.
                </p>
                <p>
                    Para resolução alternativa de litígios de consumo, o utilizador pode
                    recorrer ao{" "}
                    <a
                        href="https://www.cniacc.pt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:opacity-70 transition"
                    >
                        Centro Nacional de Informação e Arbitragem de Conflitos de Consumo (CNIACC)
                    </a>{" "}
                    ou à plataforma europeia de resolução de litígios em linha (ODR).
                </p>
            </LegalSection>

            <LegalSection title="10. Alterações aos Termos">
                <p>
                    Reservamos o direito de atualizar os presentes Termos e Condições a
                    qualquer momento, sem aviso prévio. A versão em vigor é sempre a publicada
                    nesta página, com indicação da data de última atualização. Recomendamos
                    que verifique periodicamente se existem alterações.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
