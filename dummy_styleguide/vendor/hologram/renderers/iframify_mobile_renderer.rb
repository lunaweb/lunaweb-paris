Hologram::CodeExampleRenderer::Factory.define 'iframify_mobile' do
  example_template 'iframify_mobile_example_template'
  lexer { Rouge::Lexer.find('html') }
end