Hologram::CodeExampleRenderer::Factory.define 'iframify' do
  example_template 'iframify_example_template'
  lexer { Rouge::Lexer.find('html') }
end