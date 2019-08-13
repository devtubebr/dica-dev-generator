#!/bin/bash

SOURCE_PATH=/home/devtube/dica-dev-generator
TARGET_PATH=/home/devtube/dica.devtube.com.br
YARN_BIN=/bin/yarn
GIT_BIN=/bin/git
GIT_BRANCH=master

printf "==> Removendo conteúdo de $TARGET_PATH...\n"

rm -rf $TARGET_PATH/*
printf "[OK]\n"

printf "==> Atualizando projeto local com o git...\n"

cd $SOURCE_PATH && $GIT_BIN pull origin $GIT_BRANCH
$YARN_BIN
printf "[OK]\n"

printf "==> Gerando pacote de produção com yarn build...\n"

$YARN_BIN run build
printf "[OK]\n"

printf "==> Copiando pacote de produção para $TARGET_PATH...\n"
cp -R $SOURCE_PATH/build/* $TARGET_PATH

printf "[OK]\n"

printf "Alterando dono do diretório $TARGET_PATH para usuário devtube..."

chown -R devtube:devtube $TARGET_PATH
printf "[OK]\n"

printf "==> Deploy realizado com sucesso!\n"
